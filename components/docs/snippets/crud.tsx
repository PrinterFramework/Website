export const RouteCrud = `import { NextRequest, NextResponse } from 'next/server'
import { getSession, createResponse } from 'util/session'
import prisma from 'prisma/client'

// Creates a new record
export async function POST(req: NextRequest) {
  const res = new NextResponse()
  const session = await getSession(req, res)
  try {
    const data = await req.json()
    const account = await prisma.account.create({ data })

    return createResponse(
      res,
      JSON.stringify({
        status: 'OK',
        account
      }),
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return createResponse(
      res,
      JSON.stringify({ status: 'ERROR', error }),
      { status: 500 }
    )
  }
}

// Updates an existing record by its @id
export async function PATCH(req: NextRequest) {
  const res = new NextResponse()
  const session = await getSession(req, res)
  try {
    const data = await req.json()
    const id = data.id
    delete data.id

    const account = await prisma.account.update({
      where: { id },
      data,
    })

    return createResponse(
      res,
      JSON.stringify({
        status: 'OK',
        account
      }),
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return createResponse(
      res,
      JSON.stringify({ status: 'ERROR', error }),
      { status: 500 }
    )
  }
}

// Deletes a record by its @id
export async function DELETE(req: NextRequest) {
  const res = new NextResponse()
  const session = await getSession(req, res)
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')

    const account = await prisma.account.delete({
      where: { id }
    })

    return createResponse(
      res,
      JSON.stringify({
        status: 'OK',
        account
      }),
      { status: 200 }
    )
  } catch (error) {
    console.error(error)
    return createResponse(
      res,
      JSON.stringify({ status: 'ERROR', error }),
      { status: 500 }
    )
  }
}

// Lists results or gets a specific ID
export async function GET(req: NextRequest) {
  const res = new NextResponse()
  const session = await getSession(req, res)
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const skip = searchParams.get('skip')

    if (id) {
      const account = await prisma.account.findUnique({
        where: { id }
      })

      return createResponse(
        res,
        JSON.stringify({
          status: 'OK',
          result: account
        }),
        { status: 200 }
      )
    } else {
      const results = await prisma.account.findMany({
        take: 10,
        skip: Number(skip || '0')
      })

      return createResponse(
        res,
        JSON.stringify({
          status: 'OK',
          results
        }),
        { status: 200 }
      )
    }
  } catch (error) {
    console.error(error)
    return createResponse(
      res,
      JSON.stringify({ status: 'ERROR', error }),
      { status: 500 }
    )
  }
}
`

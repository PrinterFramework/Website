export const project = `λ printer new project
👷  Generating new Printer project
    ✅  Created printer.config.json
    ✅  Created .env.dev.local
    ✅  Created .eslintrc.js
    ✅  Created .gitignore
    ✅  Created middleware.tsx
    ✅  Created next.config.js
    ✅  Created package.json
    ✅  Created README.md
    ✅  Created tsconfig.json
    ✅  Created util/session.ts
    ✅  Created types/counter.tsx
    ✅  Created scss/printer.scss
    ✅  Created scss/reset.scss
    ✅  Created scss/theme.scss
    ✅  Created scss/ui.scss
    ✅  Created scss/index.scss
    ✅  Created prisma/client.ts
    ✅  Created prisma/schema.prisma
    ✅  Created redux/hooks.tsx
    ✅  Created redux/provider.tsx
    ✅  Created redux/reducer.tsx
    ✅  Created redux/reducers.json
    ✅  Created redux/store.tsx
    ✅  Created redux/slice/counter.tsx
    ✅  Created app/layout.tsx
    ✅  Created app/page.tsx
`

export const componentLogin = `λ printer component components/login
👷  Generating new Printer component components/login
    ✅  Created components/login.tsx`

export const sliceLogin = `λ printer slice login
👷  Generating new Printer slice login
    ✅  Created redux/slice/login.tsx
    ✅  Updated redux/reducer.tsx`

export const injectLogin = `λ printer inject login components/login
💉  Injecting login into components/login
  ✅  State 'data' was injected into the component
  ✅  State 'form' was injected into the component
  ✅  2 actions were injected into the component`

export const pageLogin = `λ printer page login
👷  Generating new Printer page
  ✅  Created app/login/page.tsx`

export const crudUser = `λ printer crud user
👷  Generating new CRUD boilerplate for user
  ✅  Created app/api/user/route.tsx
`

export const Sim1Default = `'use client'

export interface ExamplePageI {

}

export default function ExamplePage({}: ExamplePageI) {
  return (
    <div className="container page">
      <p>Example Page</p>
    </div>
  )
}
`

export const Sim1Terminal = `λ printer inject counter app/example/page
💉  Injecting counter into app/example/page
    ✅  State 'data' was injected into the component
    ✅  3 actions were injected into the component`

export const Sim1Updated = `'use client'
import { reset, increment, decrement } from 'redux/slice/counter'
import { useAppSelector, useAppDispatch } from 'redux/hooks'

export interface ExamplePageI {

}

export default function ExamplePage({}: ExamplePageI) {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => ({ ...state.counter.data }))

  return (
    <div className="container page">
      <p>Example Page</p>
    </div>
  )
}
`

export const Sim2Frame1 = `import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import CounterType from 'types/counter'

export const counterInitialState = {
  // @printer::inject::counter
  data: {
    value: 0
  } as CounterType
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    // @printer::inject
    reset: () => counterInitialState,
    // @printer::inject
    increment: (state, action: PayloadAction<number>) => {
      state.data.value += action.payload
    },
    // @printer::inject
    decrement: (state, action: PayloadAction<number>) => {
      state.data.value -= action.payload
    }
  }
})

export const { increment, decrement, reset } = counterSlice.actions
`

export const Sim2Frame2 = `import { NextRequest, NextResponse } from 'next/server'
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

export const PrinterConfig = `// The Printer Config interface
export interface PrinterConfig {
  crud?: {
    create: boolean
    update: boolean
    delete: boolean
    list: boolean
    get: boolean
  }
}`

export const PrinterConfig2 = `// The default values
{
  "crud": {
    "create": true,
    "update": true,
    "delete": true,
    "list": true,
    "get": true
  }
}`

export const PrinterConfig3 = `// Enable component folders
{
  "component": {
    "index": true,
    "component": true,
    "style": true,
    "test": true
  }
}`

export const CreateComponent = `export interface ExampleI {}

export function Example({}: ExampleI) {
  return (
    <div>
      <h2>Component Example</h2>
    </div>
  )
}

export default Example`

export const CreateCrud = `// pages/api/user/create.tsx
import prisma from 'prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { Session } from 'util/session'

export const CreateRoute = withIronSessionApiRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const user = await prisma.user.create({
        data: {
          ...req.body
        }
      })
      res.status(200).send({ status: 'OK', user })
    } catch (error) {
      console.error(error)
      res.status(500).send({ status: 'ERROR', error })
    }
  },
  Session
)

export default CreateRoute
`

export const UpdateCrud = `// pages/api/user/update.tsx
import prisma from 'prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { Session } from 'util/session'

export const UpdateRoute = withIronSessionApiRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const id = req.body.id
      const data = req.body
      delete data.id

      const user = await prisma.user.update({
        where: { id },
        data,
      })
      res.status(200).send({ status: 'OK', user })
    } catch (error) {
      console.error(error)
      res.status(500).send({ status: 'ERROR', error })
    }
  },
  Session
)

export default UpdateRoute
`

export const ListCrud = `// pages/api/user/list.tsx
import prisma from 'prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { Session } from 'util/session'

export const ListRoute = withIronSessionApiRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const results = await prisma.user.findMany()
      res.status(200).send({ status: 'OK', results })
    } catch (error) {
      console.error(error)
      res.status(500).send({ status: 'ERROR', error })
    }
  },
  Session
)

export default ListRoute
`

export const GetCrud = `// pages/api/user/get.tsx
import prisma from 'prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { Session } from 'util/session'

export const GetRoute = withIronSessionApiRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: req.query.id || req.body.id
        }
      })
      res.status(200).send({ status: 'OK', user })
    } catch (error) {
      console.error(error)
      res.status(500).send({ status: 'ERROR', error })
    }
  },
  Session
)

export default GetRoute
`

export const DeleteCrud = `// pages/api/user/delete.tsx
import prisma from 'prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { Session } from 'util/session'

export const DeleteRoute = withIronSessionApiRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const user = await prisma.user.delete({
        where: {
          id: req.query.id || req.body.id
        }
      })
      res.status(200).send({ status: 'OK', user })
    } catch (error) {
      console.error(error)
      res.status(500).send({ status: 'ERROR', error })
    }
  },
  Session
)

export default DeleteRoute
`

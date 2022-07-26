export const project = `λ printer new project
👷  Generating new Printer project
    ✅  Created .babelrc
    ✅  Created .gitignore
    ✅  Created .gitkeep
    ✅  Created public/.gitkeep
    ✅  Created pages/_app.tsx
    ✅  Created pages/_document.tsx
    ✅  Created pages/index.tsx
    ✅  Created util/session.ts
    ✅  Created public/assets/css/reset.css
    ✅  Created public/assets/css/fonts.css
    ✅  Created public/assets/css/printer.css
    ✅  Created public/assets/scss/printer.scss
    ✅  Created prisma/client.ts
    ✅  Created prisma/schema.prisma
    ✅  Created package.json
    ✅  Created redux/wrapper.tsx
    ✅  Created redux/reducer.tsx
    ✅  Created redux/reducers.json
    ✅  Created tsconfig.json
    ✅  Created .husky/pre-commit
    ✅  Created printer.config.json
    ✅  Created .eslintrc.js`

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
  ✅  Created pages/login.tsx`

export const crudUser = `λ printer crud user
👷  Generating new CRUD boilerplate for user
  ✅  Created pages/api/user/create.tsx
  ✅  Created pages/api/user/update.tsx
  ✅  Created pages/api/user/get.tsx
  ✅  Created pages/api/user/list.tsx
  ✅  Created pages/api/user/delete.tsx
`

export const Sim1Default = `export interface LoginI {}

export function Login({}: LoginI) {
  return (
    <div>
      <h2>Component Login</h2>
    </div>
  )
}

export default Login`

export const Sim1Terminal = `λ printer inject login components/login
💉  Injecting login into components/login
    ✅  State 'data' was injected into the component
    ✅  State 'form' was injected into the component with the type login
    ✅  2 actions were injected into the component`

export const Sim1Updated = `import LoginType from 'types/login'
import { setData, setForm } from 'redux/slice/login'
import { useSelector, useDispatch } from 'react-redux'

export interface LoginI {}

export function Login({}: LoginI) {
  const dispatch = useDispatch()
  const form = useSelector((state: { login: { form: LoginType } }) => ({ ...state.login.form }))
  const data = useSelector((state: any) => ({ ...state.login.data }))

  return (
    <div>
      <h2>Component Login</h2>
    </div>
  )
}

export default Login`

export const Sim2Frame1 = `// Slice structure was auto generated with Printer's slice command
import { createSlice } from '@reduxjs/toolkit'
import LoginType from 'types/login'

export const loginInitialState = {
  // @printer::inject
  data: {
    dataValue: '',
  },
  // @printer::inject::login
  form: {
    username: '',
    password: ''
  } as LoginType
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    // @printer::inject
    setData(state, action) {
      state.data = action.payload
    },
    // @printer::inject
    setForm(state, action) {
      state.form = action.payload
    }
  }
})

export const { setData, setForm } = loginSlice.actions`

export const Sim2Frame2 = `// Auto generated with Printer's crud command
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

export default CreateRoute`

export const PrinterConfig = `// The Printer Config interface
export interface PrinterConfig {
  componentFolder?: boolean
  component?: {
    index?: boolean
    component?: boolean
    style?: boolean
    test?: boolean
  }
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
  "componentFolder": false,
  "component": {
    "index": true,
    "component": true,
    "style": true,
    "test": false
  },
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
  "componentFolder": true,
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

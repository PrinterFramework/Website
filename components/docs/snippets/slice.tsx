export const ReducersUpdate = `// redux/reducers.tsx
import { exampleSlice } from 'redux/slice/example'

export const reducer = {
  example: exampleSlice.reducer,
}

// redux/reducers.json
[
  "example"
]
`

export const ReducersSlice = `// redux/slice/example.tsx
import { createSlice } from '@reduxjs/toolkit'

export const exampleInitialState = {

}

export const exampleSlice = createSlice({
  name: 'example',
  initialState: exampleInitialState,
  reducers: {

  }
})

export const { } = exampleSlice.actions
`

export const SliceDecoration = `import { createSlice } from '@reduxjs/toolkit'

export const exampleInitialState = {
  // A state injection with an implicit type.
  // @printer::inject
  data: {

  },
  // A state injection with a verbose Type mapped to it.
  // This will map types/example.tsx
  // @printer::inject::example
  exampleData: {

  },
  // A state injection with a verbose Array Type mapped to it.
  // This will map types/example.tsx as an array
  // @printer::inject::example[]
  exampleItems: []
}

export const exampleSlice = createSlice({
  name: 'example',
  initialState: exampleInitialState,
  reducers: {
    // An action injection. This will automatically import the action into the component.
    // @printer::inject
    setExampleData(state, action) {
      state.exampleData = action.payload
    }
  }
})

export const { setExampleData } = exampleSlice.actions
`

export const ExampleInjection = `import ExampleType from 'types/example'
import { setExampleData } from 'redux/slice/example'
import { useSelector, useDispatch } from 'react-redux'

export interface ExampleI {}

export default function Example({}: ExampleI) {
  const dispatch = useDispatch()
  const exampleData = useSelector((state: { example: { exampleData: ExampleType } }) => ({ ...state.example.exampleData }))
  const exampleItems = useSelector((state: { example: { exampleItems: ExampleType[] } }) => ([ ...state.example.exampleItems ]))

  const data = useSelector((state: any) => ({ ...state.example.data }))
  return <h1>Page Example</h1>
}
`

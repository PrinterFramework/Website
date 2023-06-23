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

export const ExampleInjection = `'use client'
import CounterType from 'types/counter'
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

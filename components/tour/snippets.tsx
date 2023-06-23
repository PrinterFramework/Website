export const TodoType = `export interface TodoType {
  task: string
  complete: boolean
}

export default TodoType`

export const TodoSlice = `// in redux/slice/todo.tsx
import { createSlice } from '@reduxjs/toolkit'
import TodoType from 'types/todo'

export const todoInitialState = {
  // @printer::inject::todo[]
  todos: [] as TodoType[]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    // @printer::inject
    addTodo(state, action) {
      state.todos = [
        ...state.todos,
        { task: action.payload, complete: false }
      ] as TodoType[]
    },
    // @printer::inject
    setTodoStatus(state, action) {
      state.todos[action.payload.index].complete =
        action.payload.complete || false
    }
  }
})

export const { addTodo, setTodoStatus } = todoSlice.actions
`

export const TodoComponent = `// in components/todo/add.tsx
// components/todo/list.tsx will look similar to this
import { addTodo } from 'redux/slice/todo'
import { useAppDispatch } from 'redux/hooks'
import { useState } from 'react'

export interface AddI {}

export function Add({}: AddI) {
  const dispatch = useAppDispatch()
  const [task, setTask] = useState('')

  function addNewTodo() {
    dispatch(addTodo(task))
    setTask('')
  }

  return (
    <div>
      <h2>Component Add</h2>
    </div>
  )
}

export default Add
`

export const IndexPage = `// in app/page.tsx
'use client'

import Add from "components/add"
import List from "components/list"

export default function RootPage() {
  return (
    <section className="container page center">
      <Add />
      <List />
    </section>
  )
}
`

export const TodoComponentAdd = `// in components/add.tsx
import { addTodo } from 'redux/slice/todo'
import { useAppDispatch } from 'redux/hooks'
import { useState } from 'react'

export interface AddI {}

export function Add({}: AddI) {
  const dispatch = useAppDispatch()
  const [task, setTask] = useState('')

  function addNewTodo() {
    dispatch(addTodo(task))
    setTask('')
  }

  return (
    <div className="add-todo">
      <p>Add a new task</p>
      <input
        type="text"
        placeholder="Type in a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <a className="button" onClick={() => addNewTodo()}>
        Add Task
      </a>
    </div>
  )
}

export default Add
`

export const TodoComponentList = `import { setTodoStatus } from 'redux/slice/todo'
import { useAppSelector, useAppDispatch } from 'redux/hooks'

export interface ListI {}

export function List({}: ListI) {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => [
    ...state.todo.todos
  ])

  function updateTodoStatus(index: number, complete: boolean) {
    dispatch(setTodoStatus({ index, complete }))
  }

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div
          className="todo-item"
          key={index}
          onClick={(e) => updateTodoStatus(index, !todo.complete)}
        >
          <p>{todo.task}</p>
          <a className={\`cb \${todo.complete ? 'check' : ''}\`} />
        </div>
      ))}
    </div>
  )
}

export default List`

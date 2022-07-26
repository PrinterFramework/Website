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
import TodoType from 'types/todo'
import { addTodo, setTodoStatus } from 'redux/slice/todo'
import { useSelector, useDispatch } from 'react-redux'

export interface AddI {}

export function Add({}: AddI) {
  const dispatch = useDispatch()
  const todos = useSelector((state: { todo: { todos: TodoType[] } }) => ([ ...state.todo.todos ]))

  return (
    <div>
      <h2>Component Add</h2>
    </div>
  )
}

export default Add
`

export const IndexPage = `// in pages/index.tsx
import Add from 'components/todo/add'
import List from 'components/todo/list'

export interface IndexI {}

export default function Index({}: IndexI) {
  return (
    <div className="container">
      <Add />
      <List />
    </div>
  )
}`

export const TodoComponentAdd = `// in components/todo/add.tsx
import TodoType from 'types/todo'
import { addTodo, setTodoStatus } from 'redux/slice/todo'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

export interface AddI {}

export function Add({}: AddI) {
  const dispatch = useDispatch()
  const todos = useSelector((state: { todo: { todos: TodoType[] } }) => ([
    ...state.todo.todos
  ]))

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

export default Add`

export const TodoComponentList = `// in components/todo/list.tsx
import TodoType from 'types/todo'
import { addTodo, setTodoStatus } from 'redux/slice/todo'
import { useSelector, useDispatch } from 'react-redux'

export interface ListI {}

export function List({}: ListI) {
  const dispatch = useDispatch()
  const todos = useSelector((state: { todo: { todos: TodoType[] } }) => [
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

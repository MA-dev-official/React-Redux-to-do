import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
}

export const TodoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    updateTodo: (state, action) => {
  const { id, text } = action.payload; // NOT newText
  const todoToUpdate = state.todos.find(todo => todo.id === id);
  if (todoToUpdate) {
    todoToUpdate.text = text;
    localStorage.setItem('todos', JSON.stringify(state.todos));
  }
    }
  },
})

export const { addTodo, deleteTodo, updateTodo } = TodoSlice.actions

export default TodoSlice.reducer
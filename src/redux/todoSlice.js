import {createSlice} from '@reduxjs/toolkit';


const todoSlice = createSlice({
    name : "todo",
    initialState : [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: action.payload.id,
                content: action.payload.content,
                completed: false
            }
            state.push(newTodo);
        },
        toggleTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload.id)
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            const newState = state.filter(todo => todo.id !== action.payload.id)
            return newState;
        },
    }
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions;
export const reducer = todoSlice.reducer;
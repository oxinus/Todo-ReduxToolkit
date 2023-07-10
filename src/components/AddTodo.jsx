import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { AddButton, TodoInput, TodoForm, H1 } from '../styles/styles';
import { AddBox } from '@mui/icons-material';

const AddTodo = () => {

    const [textValue, setTextValue] = useState('');
    const dispatch = useDispatch();

    const todoSubmit = e => {
        e.preventDefault();
        if (textValue){
            dispatch(
                addTodo({
                    id:Date.now(),
                    content:textValue
                })
            )
        }
        setTextValue("")
    }

  return (
    <>
        <H1>Todo List</H1>
        <TodoForm onSubmit={todoSubmit}>
                <TodoInput onChange={e => setTextValue(e.target.value)} value={textValue} autoFocus={true}/>
                <AddButton>
                    <AddBox fontSize='large'/>
                </AddButton>
        </TodoForm>
    </>
  )
}

export default AddTodo
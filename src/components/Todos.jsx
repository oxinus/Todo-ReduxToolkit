import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { toggleTodo, deleteTodo } from '../redux/todoSlice';
import { Typography } from '@mui/material';
import { ListContainer, Ul, DeleteTodo, CheckTodo, IconBtn } from '../styles/styles';

const Todos = () => {

    const todos = useSelector(state => state);
    const dispatch = useDispatch();

    console.log(todos)
  return (
    <ListContainer>
        {todos.map(todo => (
            <Ul key={todo.id}>
                <Typography variant='h6' sx={{...(todo.completed && {textDecoration: "line-through"})}}>
                    {todo.content}
                </Typography>
                <div>
                    <IconBtn onClick={() => dispatch(deleteTodo({id: todo.id}))}>
                        <DeleteTodo />
                    </IconBtn>
                    <IconBtn onClick={() => dispatch(toggleTodo({id: todo.id, completed: !todo.completed }))} >
                        <CheckTodo color='success'/>
                    </IconBtn>
                </div>
            </Ul>
        ))}
    </ListContainer>
  )
}

export default Todos
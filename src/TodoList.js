import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export default function TodoList({ todos, deleter }) {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div key={todo.id}>
                    <ListItem>
                        <span onClick={() => deleter(todo.id)}>{todo.content}</span>
                    </ListItem>
                    <Divider />
                </div>
            );
        })
    ) : ( 
       <p>Great Job! No to-do's left!</p>
    );
    return <div>{todoList}</div>;
}
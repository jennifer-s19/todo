import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoEntryForm from './TodoEntryForm';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

export default function App() {
  const [todos, setTodos] = useState ([
    {id: 1, content: 'Do APAM reading'},
    {id: 2, content: 'Complete Calc 2 homework'},
  ]);
  function deleteTodo(id) {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }
  function addTodo(todo) {
    setTodos(todos => [...todos, todo]);
  }
  return (
    <div className="App">
      <Container maxWidth="sm" style={{marginTop: 40}}>
      <Paper style={{padding: 50, backgroundColor: 'lightblue'}}>
        <Typography variant="h2" align="center">Things To Do</Typography>
        <TodoList todos={todos} deleter={deleteTodo}/>
        <TodoEntryForm adder={addTodo} />
      </Paper>
    </Container>
    </div>
  );
}
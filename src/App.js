import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoEntryForm from './TodoEntryForm';

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
      <h1>Things To Do</h1>
      <TodoList todos ={todos} deleter={deleteTodo} />
      <TodoEntryForm adder={addTodo} />
    </div>
  );
}
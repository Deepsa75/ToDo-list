import React from 'react';
import './styles.css';
import TodoList from './components/TodoList';

function App() {
    return (
        <div className="container">
            <h1>Todo List</h1>
            <TodoList />
        </div>
    );
}

export default App;

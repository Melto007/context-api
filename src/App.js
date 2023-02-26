import './App.css';
import React, { useReducer } from 'react'
import { Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import { TodoContext } from './context/TodoContext'
import { todoReducer } from './context/reducer'
import TodoForm from './components/TodoForm';
import Todos from './components/Todos'

const App = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [])
    return (
      <TodoContext.Provider value={{ todos, dispatch }}>
        <Container fluid>
          <h1>Todo App with context api</h1>
          <Todos />
          <div className='mt-10'>
            <TodoForm />
          </div>
        </Container>
      </TodoContext.Provider>
    )
}
export default App;

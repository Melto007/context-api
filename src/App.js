import './App.css';
import React, { useReducer } from 'react'
import { Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"

import { TodoContext } from './context/TodoContext'
import { todoReducer } from './context/reducer'

const App = () => {
    const [ todo, dispatch ] = useReducer(todoReducer, [])
    return (
      <TodoContext.Provider value={{ todo, dispatch }}>
        <Container fluid>
          <h1>Todo App with context api</h1>
        </Container>
      </TodoContext.Provider>
    )
}
export default App;

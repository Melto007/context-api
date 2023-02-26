import React, { useState, useContext } from 'react'
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupText
} from 'reactstrap'

import { v4 } from 'uuid'
import { TodoContext } from '../context/TodoContext'
import { ADD_TODO } from '../context/action.types'

const TodoForm = () => {
    const [ todoString, setTodoString ] = useState("")
    const { dispatch } = useContext(TodoContext)

    const submitHandler = (e) => {
        e.preventDefault()

        if(todoString === '') {
            return alert("Please enter a todo")
        }

        const todo = {
            todoString,
            id: v4()
        }

        dispatch({
            type: ADD_TODO,
            payload: todo
        })
        setTodoString("")
    }

    return (
        <Form onSubmit={submitHandler}>
            <FormGroup>
                <InputGroup>
                    <Input 
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder='Your next todo'
                        value={todoString}
                        onChange={e => setTodoString(e.target.value)}
                    />
                    <InputGroupText>
                        <Button
                            color="warning"
                        >Add</Button>
                    </InputGroupText>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}
export default TodoForm
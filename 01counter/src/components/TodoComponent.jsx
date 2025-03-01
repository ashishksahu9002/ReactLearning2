import React, { useState } from 'react'

function TodoComponent() {

    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    function addTodo() {
        setTodos([...todos, {todoMsg: text, status: false, id: Date.now()}])
        setText('')
    }

    function deleteTodo(id) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
    
    function updateStatus(id) {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id) ? {...prevTodo, status: !prevTodo.status} : prevTodo))
    }

    return (
        <div>
            <div>
                <input placeholder='type your text here' onChange={(e)=>setText(e.target.value)} value={text} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div>
                <h2>Your Todo is here</h2>
                <div>
                    {todos.map((todo)=> (
                        <div key={todo.id} style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>
                            <input type='checkbox' onClick={()=> updateStatus(todo.id)} />
                            <p>{todo.todoMsg}</p>
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TodoComponent
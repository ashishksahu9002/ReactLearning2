import React, { useState } from 'react'

function ToDo() {
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    function addTodo () {
        setTodos([...todos, {todoMsg: text, status: false}])
        setText('')
    }

    function statusUpdate (index) {
        const temp = [...todos]
        temp[index].status = !temp[index].status
        setTodos(temp)
    }
    
    function deleteTodo (index) {
        const temp = [...todos]
        temp.splice(index,1)
        setTodos(temp)
    }

    return (
        <div>
            <div>
                <input placeholder='Input your text' onChange={(e) => setText(e.target.value)} value={text}/>
                <button onClick={addTodo} >Add Todo</button>
            </div>
            <div>
                <h1>Todos is here</h1>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index} style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>
                            <h3>{todo.todoMsg}</h3>
                            <button onClick={()=>statusUpdate(index)} >Status</button>
                            <button onClick={()=>deleteTodo(index)} >Delete</button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default ToDo
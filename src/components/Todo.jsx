import {useState, useEffect, useRef} from 'react'
import Streak from './Streak'

function Todo () {

    function localcheck () {
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
    }

    const [todo, setTodo] = useState('')
    const [todolist, setTodolist] = useState(localcheck)
    const [editId, setEditId] = useState(null) // Track which item is being edited
    const [editValue, setEditValue] = useState('') // Store edited text
    const inputRef = useRef(null) // Reference to the input field

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todolist))
    }, [todolist])

    useEffect(() => {
        // Auto-focus the input when component mounts
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const addTodo = () => {
        if (!todo) return;
        setTodolist([{ id: Date.now(), text: todo, completed: false }, ...todolist])
        setTodo('')
        // Re-focus the input after adding
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

    const deleteTodo = (id) => {
        setTodolist(prev => prev.filter((item) => item.id !== id))
    }

    const startEdit = (id, text) => {
        setEditId(id)
        setEditValue(text)
    }

    const saveEdit = (id) => {
        setTodolist(prev => prev.map(item => 
            item.id === id ? { ...item, text: editValue } : item
        ))
        setEditId(null)
        setEditValue('')
    }

    const todocomplete = (id) => {
        setTodolist(prev => prev.map(item => 
            item.id === id ? { ...item, completed: !item.completed } : item
        ))
    }

    const moveUp = (index) => {
    if (index === 0) return; 
    const newList = [...todolist];
    const item = newList.splice(index, 1)[0]; 
    newList.unshift(item); 
    setTodolist(newList);
}

const moveDown = (index) => {
    if (index === todolist.length - 1) return;
    const newList = [...todolist];
    const item = newList.splice(index, 1)[0]; 
    newList.push(item);
    setTodolist(newList);
}

    return (
        <section className='section-todo'>
                <div className='add-todo'>
                    <input 
                        ref={inputRef}
                        type="text" 
                        value={todo} 
                        onChange={(e) => setTodo(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Add a new todo..."
                    />
                    <button onClick={addTodo}>Add</button>
                </div>
            <div className='todo-list'>
            {todolist.map((item, index) => (
                <div className='todo' key={item.id}>
                    <div className="checkandtodo">
                    <input 
                        type="checkbox" 
                        checked={item.completed}
                        onChange={() => todocomplete(item.id)}
                    />
                   {editId === item.id ? (
                       <textarea value={editValue} onChange={(e) => setEditValue(e.target.value)}></textarea>
                   ) : (
                       <textarea disabled value={item.text} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}></textarea>
                   )}
                   </div>
                   <div className="buttons">
                   {editId === item.id ? (
                       <button onClick={() => saveEdit(item.id)}>Save</button>
                   ) : (
                       <button onClick={() => startEdit(item.id, item.text)}>Edit</button>
                   )}
                   <button className='delete' onClick={() => deleteTodo(item.id)}>Delete</button>
                    <button onClick={() => moveUp(index)}>↑ Up</button>
                    <button onClick={() => moveDown(index)}>↓ Down</button>
                    </div>
                    </div>
            ))}
                            </div>
            <Streak completed={todolist.filter(item => item.completed).length} />
        </section>
    )
}

export default Todo
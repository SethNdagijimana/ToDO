import { useState } from "react"
import TodoItem from "../TodoItem/TodoItem"

const TodoList = () => {
    const [task, setTask] = useState([
        {
        id: 1,
        text: "Bk Insurance Appointment",
        completed: true
 
    },
        {
            id: 2,
            text: "Recieving Insurance",
            completed: false
        }
    ])


    const [text, setText] = useState("")

    function addTask(text) {

        const newTask = {
            id: Date.now(),
            text,
            completed: false
        }

        setTask([...task, newTask]);
        setText("")
    }

    function deleteTask(id) {

        setTask(task.filter(task => task.id !== id));
    }

    function toggleCompleted(id){
        setTask(task.map(task => {
            if(task.id === id) {
                return {...task, completed: !task.completed }
            }else{
                return task;
            }
        }))
    }


    return (
        <div className="bg-gray-500 w-[300px] mx-auto h-full mt-20">

        {task.map(task => (
        <TodoItem
        key={task.id} 
        task={task}
        deleteTask={deleteTask}
        toggleCompleted={toggleCompleted} 
        />
    ))}
     <div className="p-4 space-x-4">
            <input value={text} onChange={e => setText(e.target.value)} className="bg-white text-black gap-8 px-1" />
        
           
                <button onClick={() => addTask(text)} className="bg-blue-950 w-[50px] text-white h-8">Add</button>
            </div>

        </div>
    )
}

export default TodoList
const TodoItem = ({task, deleteTask, toggleCompleted}) =>{
    function handleChange () {
        toggleCompleted(task.id)
    }

    return (
        <div className=" flex gap-4 items-center p-8 bg-black text-white w-full">
            <input type="checkbox" checked={task.completed} onChange={handleChange}/>
            <p>{task.text}</p>

            <button onClick={() => deleteTask(task.id)} className="bg-red-950 w-[50px] h-[40px] text-white">X</button>
        </div>
    )
}

export default TodoItem
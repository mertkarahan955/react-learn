import React, {useState} from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState(["Eat breakfast", "Go to the gym", "Learn React", "Go to sleep"]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(newTask){
        setTasks([...tasks, newTask]);
        setNewTask('');
    }

    function removeTask(index){
        const updatedTask = tasks.filter((_, i) => i !== index);
        setTasks(updatedTask);
    }

    function moveTaskUp(index){
        const updatedTasks = [...tasks];
        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index - 1];
        updatedTasks[index - 1] = temp;
        setTasks(updatedTasks);
    }

    function moveTaskDown(index){

        const updatedTasks = [...tasks];
        const temp = updatedTasks[index];
        
        if(index !==updatedTasks.length - 1){
        updatedTasks[index] = updatedTasks[index + 1];
        updatedTasks[index + 1] = temp;
        setTasks(updatedTasks);

        }
    }


    return (
        <div className='to-do-list'>
                <h1>To Do List</h1>
                <input type="text" 
                placeholder='Enter a task...'
                value = {newTask}
                onChange={handleInputChange} />
                <button className = 'add-button' onClick = {() => addTask(newTask)}>
                    Add Task
                </button>
                <ol>
                    {tasks.map((task, index) => 
                        <li key = {index}>
                            <span className = 'text'>{task}</span>
                            <button className = "delete-button" onClick={() => removeTask(index)}>Delete</button> 
                            <button className = "up-button" onClick={() => moveTaskUp(index)}>Up Button</button>
                            <button className = "down-button" onClick={() => moveTaskDown(index)}>
                                Down Button</button>
                        </li>
                        )}
                </ol>
        </div>
        
    )
}

export default ToDoList;
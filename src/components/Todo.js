import React, { useState, useEffect } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import '../css/todo.css';

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  //adding the task in tasks hook as this function is called
  //emptying the textbox with the same
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, { id: Date.now(), title: newTask, completed: false }];
      setTasks(updatedTasks);
      setNewTask('');
    }
  };
  //if the task complete btn is pressed this functin is called
  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  //removing the tasks filtered by id as the remove button is clicked

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  //handling the enter key press as we input a new a task
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  //calculating the no. of tasks and no. of completed tasks
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="todo-page">
      <div className="todo-container">
        <h1>Todo List</h1>

        <div className="input-container">
          <input
            type="text"
            placeholder="Add new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>

        <div className="tasks-container">
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <span className={task.completed ? 'completed' : ''}>{task.title}</span>
                <div className="task-actions">
                  <button
                    className="icon-btn"
                    onClick={() => handleCompleteTask(task.id)}
                  >
                    <FaCheck />
                  </button>
                  <button
                    className="icon-btn"
                    onClick={() => handleRemoveTask(task.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="task-summary">
          <p>Total tasks: {totalTasks}</p>
          <p>Completed tasks: {completedTasks}</p>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;

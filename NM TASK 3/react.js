import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    // Add more tasks as needed
  ]);

  const handleTaskComplete = (taskId) => {
    // Implement task completion logic here
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onComplete={handleTaskComplete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

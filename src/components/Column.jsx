import React, { useState } from "react";
import TaskCard from "./TaskCard";

const Column = ({ columnName, tasks, onAddTask, onDeleteTask }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "Low",
  });

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      onAddTask({ ...newTask, column: columnName });
      setNewTask({ title: "", description: "", priority: "Low" });
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg w-full md:w-80 min-h-96">
      <h2 className="font-bold text-xl mb-4">
        {columnName} ({tasks.length})
      </h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            priority={task.priority}
            onDelete={() => onDeleteTask(task.id)}
          >
            Assigned to: {task.assigned || "Unassigned"}
          </TaskCard>
        ))}
      </div>
      {isAdding ? (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Task Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            className="w-full p-2 mb-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
            className="w-full p-2 mb-2 border rounded"
          />
          <select
            value={newTask.priority}
            onChange={(e) =>
              setNewTask({ ...newTask, priority: e.target.value })
            }
            className="w-full p-2 mb-2 border rounded"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <button
            onClick={handleAddTask}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Add Task
          </button>
          <button
            onClick={() => setIsAdding(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          + Add Task
        </button>
      )}
    </div>
  );
};

export default Column;

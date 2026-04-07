import React, { useState } from "react";
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Design Login Page",
      description: "Create responsive login UI",
      priority: "High",
      column: "To Do",
      assigned: "Ali",
    },
    {
      id: 2,
      title: "Implement Authentication",
      description: "Add login and signup functionality",
      priority: "High",
      column: "To Do",
    },
    {
      id: 3,
      title: "Setup Database",
      description: "Configure MongoDB for user data",
      priority: "Medium",
      column: "In Progress",
      assigned: "Bob",
    },
    {
      id: 4,
      title: "Create API Endpoints",
      description: "Build RESTful APIs for tasks",
      priority: "Medium",
      column: "In Progress",
    },
    {
      id: 5,
      title: "Test Application",
      description: "Run unit and integration tests",
      priority: "Low",
      column: "Done",
    },
    {
      id: 6,
      title: "Deploy to Production",
      description: "Deploy app to Vercel",
      priority: "Low",
      column: "Done",
      assigned: "Charlie",
    },
  ]);

  const handleAddTask = (newTask) => {
    const task = {
      ...newTask,
      id: Date.now(), // simple id
      assigned: newTask.assigned || "Unassigned",
    };
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <Board
        tasks={tasks}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;

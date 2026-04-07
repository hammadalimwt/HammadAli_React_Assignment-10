import React from "react";
import Column from "./Column";

const Board = ({ tasks, onAddTask, onDeleteTask }) => {
  const columns = ["To Do", "In Progress", "Done"];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 p-6 bg-gray-50 min-h-screen">
      {columns.map((column) => (
        <Column
          key={column}
          columnName={column}
          tasks={tasks.filter((task) => task.column === column)}
          onAddTask={onAddTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default Board;

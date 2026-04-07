import React from "react";

const TaskCard = ({ title, description, priority, onDelete, children }) => {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-500";
      case "medium":
        return "bg-yellow-500";
      case "low":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <div className="flex items-center justify-between">
        <span
          className={`text-white px-2 py-1 rounded text-sm ${getPriorityColor(priority)}`}
        >
          {priority}
        </span>
        <button onClick={onDelete} className="text-red-500 hover:text-red-700">
          Delete
        </button>
      </div>
      {children && <div className="mt-2 text-sm text-gray-500">{children}</div>}
    </div>
  );
};

export default TaskCard;

function TaskItem({ 
  task, 
  handleToggleStar, 
  handleEditTask, 
  handleDeleteTask,
  getCategoryColor,
  getPriorityColor
}) {
  return (
    <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 hover:bg-gray-700">
      {/* Title with Star */}
      <div className="col-span-3 flex items-center gap-2">
        <button onClick={() => handleToggleStar(task.id)}>
          <span className={task.starred ? "text-yellow-400" : "text-gray-500"}>
            {task.starred ? "⭐" : "☆"}
          </span>
        </button>
        <span className="font-medium">{task.title}</span>
      </div>

      {/* Description */}
      <div className="col-span-4 text-gray-300">{task.description}</div>

      {/* Category */}
      <div className="col-span-2">
        <span className={`${getCategoryColor(task.category)} px-3 py-1 rounded-full text-xs font-semibold`}>
          {task.category}
        </span>
      </div>

      {/* Priority */}
      <div className={`col-span-2 font-semibold ${getPriorityColor(task.priority)}`}>
        {task.priority}
      </div>

      {/* Actions */}
      <div className="col-span-1 flex justify-center gap-2">
        <button 
          onClick={() => handleEditTask(task)}
          className="text-blue-400 hover:text-blue-300"
        >
          Edit
        </button>
        <button 
          onClick={() => handleDeleteTask(task.id)}
          className="text-red-400 hover:text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
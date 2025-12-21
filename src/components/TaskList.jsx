import TaskItem from './TaskItem'

function TaskList({ 
  filteredTasks,
  handleToggleStar,
  handleEditTask,
  handleDeleteTask,
  handleDeleteAll,
  setShowModal,
  setEditingTask,
  getCategoryColor,
  getPriorityColor
}) {
  return (
    <main className="max-w-7xl mx-auto p-6">
      {/* Action Bar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Your Tasks</h2>
        
        <div className="flex gap-4">
          <button 
            onClick={() => {
              setEditingTask(null);
              setShowModal(true);
            }}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-semibold"
          >
            Add Task
          </button>
          <button 
            onClick={handleDeleteAll}
            className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-lg font-semibold"
          >
            Delete All
          </button>
        </div>
      </div>

      {/* Task Table */}
      <div className="bg-gray-800 rounded-xl border border-gray-700">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-700 font-semibold border-b border-gray-600">
          <div className="col-span-3">Title</div>
          <div className="col-span-4">Description</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2">Priority</div>
          <div className="col-span-1 text-center">Options</div>
        </div>

        {/* Task Items */}
        <div>
          {filteredTasks.length === 0 ? (
            <p className="text-center text-gray-400 py-8">No tasks yet. Add your first task!</p>
          ) : (
            filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                handleToggleStar={handleToggleStar}
                handleEditTask={handleEditTask}
                handleDeleteTask={handleDeleteTask}
                getCategoryColor={getCategoryColor}
                getPriorityColor={getPriorityColor}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default TaskList;
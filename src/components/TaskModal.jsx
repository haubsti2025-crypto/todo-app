function TaskModal({ 
  showModal, 
  setShowModal, 
  editingTask, 
  setEditingTask,
  title, 
  setTitle, 
  description, 
  setDescription, 
  category, 
  setCategory, 
  priority, 
  setPriority, 
  handleAddTask 
}) {
  
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">
          {editingTask ? 'Edit Task' : 'Add New Task'}
        </h2>
        
        {/* Title Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
            placeholder="Enter task title"
          />
        </div>

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg h-24 resize-none"
            placeholder="Enter description"
          />
        </div>

        {/* Category Select */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
          >
            <option>Work</option>
            <option>Personal</option>
            <option>Shopping</option>
            <option>Study</option>
          </select>
        </div>

        {/* Priority Select */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button 
            onClick={() => {
              setShowModal(false);
              setEditingTask(null);
            }}
            className="flex-1 bg-gray-600 hover:bg-gray-700 py-2 rounded-lg"
          >
            Cancel
          </button>
          <button 
            onClick={handleAddTask}
            className="flex-1 bg-blue-500 hover:bg-blue-600 py-2 rounded-lg"
          >
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
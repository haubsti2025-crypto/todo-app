import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('')

  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Personal')
  const [priority, setPriority] = useState('Medium')

  //for handle Tasks state
  function handleAddTask() {
    if (title.trim() !== '' && description.trim() !== '') {
      const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        category: category,
        priority: priority,
        starred: false
      };
      
      setTasks([...tasks, newTask]);
      
      // Clear inputs
      setTitle('');
      setDescription('');
      setCategory('Personal');
      setPriority('Medium');
      setShowModal(false);
    }
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function handleDeleteAll() {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      setTasks([]);
    }
  }
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">Task Manager</h1>
        
        {/* Search Box - পরে add করব */}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Your Tasks</h2>
        
          {/* Buttons */}
          <div className="flex gap-4">
            <button 
              onClick={() => setShowModal(true)}
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

        {/* Task List - পরে add করব */}
        {/* Task List */}
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
            {tasks.length === 0 ? (
              <p className="text-center text-gray-400 py-8">No tasks yet. Add your first task!</p>
            ) : (
              tasks.map((task) => (
                <div key={task.id} className="grid grid-cols-12 gap-4 p-4 border-b border-gray-700 hover:bg-gray-700">
                  <div className="col-span-3 font-medium">
                    {task.title}
                  </div>
                  <div className="col-span-4 text-gray-300">    
                    {task.description}
                  </div>
                  <div className="col-span-2">
                    <span className="bg-blue-500 px-3 py-1 rounded-full text-xs">
                      {task.category}
                    </span>
                  </div>
                  <div className="col-span-2 font-semibold">
                    {task.priority}
                  </div>
                  <div className="col-span-1 flex justify-center gap-2">
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="text-red-400 hover:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>

      {/* Add Task Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      
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
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg h-24"
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
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-600 hover:bg-gray-700 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask} 
                className="flex-1 bg-blue-500 hover:bg-blue-600 py-2 rounded-lg"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  
  )
}

export default App;
import { useState } from "react";
import Header from "./components/Header";
import TaskModal from "./components/TaskModal";
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('')

  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Personal')
  const [priority, setPriority] = useState('Medium')

  const [searchTerm, setSearchTerm] = useState('')
  const [editingTask, setEditingTask] = useState(null)// For edit task


  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );


  //for handle Tasks state
  function handleAddTask() {
    if (title.trim() !== '' && description.trim() !== '') {
      if (editingTask) {
        // Update existing task
        setTasks(tasks.map(task =>
          task.id === editingTask.id
            ? { ...task, title, description, category, priority }
            : task
        ));
        setEditingTask(null);
      } else {
        // Add new task
        const newTask = {
          id: Date.now(),
          title: title,
          description: description,
          category: category,
          priority: priority,
          starred: false
        };
        setTasks([...tasks, newTask]);
      }
      
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

  function handleToggleStar(id) {
    setTasks(tasks.map(task => 
      task.id === id 
        ? { ...task, starred: !task.starred }
        : task
    ));
  }

  function handleEditTask(task) {
    setEditingTask(task);
    setTitle(task.title);
    setDescription(task.description);
    setCategory(task.category);
    setPriority(task.priority);
    setShowModal(true);
  }

  function getPriorityColor(priority) {
    switch(priority) {
      case 'High': return 'text-red-400';
      case 'Medium': return 'text-yellow-400';
      case 'Low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  }

  function getCategoryColor(category) {
    switch(category) {
      case 'Work': return 'bg-red-500';
      case 'Personal': return 'bg-blue-500';
      case 'Shopping': return 'bg-yellow-500';
      case 'Study': return 'bg-green-500';
      default: return 'bg-purple-500';
    }
  } 

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <TaskList 
        filteredTasks={filteredTasks}
        handleToggleStar={handleToggleStar}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        handleDeleteAll={handleDeleteAll}
        setShowModal={setShowModal}
        setEditingTask={setEditingTask}
        getCategoryColor={getCategoryColor}
        getPriorityColor={getPriorityColor}
      />

      <TaskModal 
        showModal={showModal}
        setShowModal={setShowModal}
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        category={category}
        setCategory={setCategory}
        priority={priority}
        setPriority={setPriority}
        handleAddTask={handleAddTask}
      />
    </div>
  )
}

export default App;
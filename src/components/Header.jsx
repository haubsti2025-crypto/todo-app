function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="bg-gray-800 border-b border-gray-700 p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search Task"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
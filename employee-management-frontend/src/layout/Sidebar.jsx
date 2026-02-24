function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 hidden md:block">
      <h1 className="text-2xl font-bold mb-8">EMS Dashboard</h1>

      <nav className="space-y-4">
        <p className="hover:text-blue-400 cursor-pointer">Dashboard</p>
        <p className="hover:text-blue-400 cursor-pointer">Employees</p>
        <p className="hover:text-blue-400 cursor-pointer">Settings</p>
      </nav>
    </div>
  );
}

export default Sidebar;
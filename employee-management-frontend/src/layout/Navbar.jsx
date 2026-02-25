function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-[#0F172A] border-b border-gray-800">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
          <span className="font-bold">👥</span>
        </div>
        <h1 className="text-lg font-semibold">
          EmpTrack <span className="text-gray-400 text-sm">Management</span>
        </h1>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium">
        + Add Employee
      </button>
    </div>
  );
}

export default Navbar;
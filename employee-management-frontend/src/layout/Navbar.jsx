function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Employee Management System</h2>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center">
          A
        </div>
        <span className="font-medium">Admin</span>
      </div>
    </div>
  );
}

export default Navbar;
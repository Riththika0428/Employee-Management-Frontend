function EmployeeTable({ employees }) {
  return (
    <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        <h2 className="font-semibold text-lg">All Employees ({employees.length})</h2>
        <input
          type="text"
          placeholder="Search name, email, department..."
          className="bg-[#1F2937] text-sm px-4 py-2 rounded-lg w-72 outline-none"
        />
      </div>

      <table className="w-full text-sm">
        <thead className="bg-[#0F172A] text-gray-400 uppercase text-xs">
          <tr>
            <th className="p-4 text-left">#</th>
            <th className="p-4 text-left">Employee</th>
            <th className="p-4 text-left">Department</th>
            <th className="p-4 text-left">Position</th>
            <th className="p-4 text-left">Salary</th>
            <th className="p-4 text-left">Hire Date</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp.id} className="border-t border-gray-800 hover:bg-[#1E293B]">
              <td className="p-4">{index + 1}</td>
              <td className="p-4">
                <p className="font-medium">{emp.name}</p>
                <p className="text-gray-400 text-xs">{emp.email}</p>
              </td>
              <td className="p-4">{emp.department}</td>
              <td className="p-4">{emp.position}</td>
              <td className="p-4 font-semibold">${emp.salary.toLocaleString()}</td>
              <td className="p-4">{emp.hireDate}</td>
              <td className="p-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    emp.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {emp.status}
                </span>
              </td>
              <td className="p-4 space-x-2">
                <button className="px-3 py-1 text-sm bg-blue-600/20 text-blue-400 rounded-lg">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm bg-red-600/20 text-red-400 rounded-lg">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
                
function EmployeeTable({
  employees,
  search,
  setSearch,
  requestSort,
  onEdit,
  onDelete
}) {
  return (
    <div className="bg-[#111827] rounded-xl border border-gray-800 overflow-hidden">
      <div className="p-4 flex justify-between items-center border-b border-gray-800">
        <h2 className="font-semibold text-lg">
          All Employees ({employees.length})
        </h2>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bg-[#1F2937] px-4 py-2 rounded-lg w-72 outline-none"
        />
      </div>

      <table className="w-full text-sm">
        <thead className="bg-[#0F172A] text-gray-400 uppercase text-xs">
          <tr>
            {["name", "department", "position", "salary"].map(col => (
              <th
                key={col}
                onClick={() => requestSort(col)}
                className="p-4 text-left cursor-pointer hover:text-white"
              >
                {col}
              </th>
            ))}
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp.id} className="border-t border-gray-800 hover:bg-[#1E293B]">
              <td className="p-4">{emp.name}</td>
              <td className="p-4">{emp.department}</td>
              <td className="p-4">{emp.position}</td>
              <td className="p-4">${emp.salary.toLocaleString()}</td>
              <td className="p-4">{emp.status}</td>
              <td className="p-4 space-x-2">
                <button
                  onClick={() => onEdit(emp)}
                  className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(emp)}
                  className="px-3 py-1 bg-red-600/20 text-red-400 rounded"
                >
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
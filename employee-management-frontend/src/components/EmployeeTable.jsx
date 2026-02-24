import { useState } from "react";

function EmployeeTable({ employees, setEditingEmployee, setDeleteEmployee }) {
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    const order = field === sortField && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  const filtered = employees
    .filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a[sortField] > b[sortField] ? 1 : -1;
      }
      return a[sortField] < b[sortField] ? 1 : -1;
    });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 mb-3 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full text-sm text-left text-gray-600">
        <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
          <tr className="border-b hover:bg-gray-50 transition">
            {["name", "email", "position", "salary"].map((col) => (
              <th
                key={col}
                className="p-2 cursor-pointer"
                onClick={() => handleSort(col)}
              >
                {col.toUpperCase()} {sortField === col ? (sortOrder === "asc" ? "↑" : "↓") : ""}
              </th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((emp) => (
            <tr key={emp.id} className="border-t">
              <td className="p-2">{emp.name}</td>
              <td className="p-2">{emp.email}</td>
              <td className="p-2">{emp.position}</td>
              <td className="p-2">{emp.salary}</td>
              <td className="p-2 space-x-2">
                <button
                  onClick={() => setEditingEmployee(emp)}
                  className="bg-yellow-500 px-2 py-1 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => setDeleteEmployee(emp)}
                  className="bg-red-600 px-2 py-1 text-white rounded"
                >
                  DEL
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
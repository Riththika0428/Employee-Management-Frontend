import { useState } from "react";
import Navbar from "./layout/Navbar";
import DashboardCards from "./components/DashboardCards";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeFormModal from "./components/EmployeeFormModal";
import DeleteModal from "./components/DeleteModal";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@company.com",
      department: "Engineering",
      position: "Senior Developer",
      salary: 95000,
      hireDate: "2021-03-15",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Martinez",
      email: "bob@company.com",
      department: "HR",
      position: "Manager",
      salary: 72000,
      hireDate: "2020-07-01",
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // 🔎 SEARCH
  const filteredEmployees = employees.filter(emp =>
    `${emp.name} ${emp.email} ${emp.department}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // 🔽 SORT
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (!sortConfig.key) return 0;

    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const requestSort = key => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc")
      direction = "desc";

    setSortConfig({ key, direction });
  };

  // ➕ ADD / EDIT
  const handleSave = employee => {
    if (employee.id) {
      setEmployees(employees.map(e => (e.id === employee.id ? employee : e)));
    } else {
      setEmployees([...employees, { ...employee, id: Date.now() }]);
    }
    setShowForm(false);
  };

  // ❌ DELETE
  const handleDelete = () => {
    setEmployees(employees.filter(e => e.id !== selectedEmployee.id));
    setShowDelete(false);
  };

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      <Navbar onAdd={() => { setSelectedEmployee(null); setShowForm(true); }} />
      <div className="p-6 space-y-6">
        <DashboardCards employees={employees} />

        <EmployeeTable
          employees={sortedEmployees}
          search={search}
          setSearch={setSearch}
          requestSort={requestSort}
          onEdit={(emp) => { setSelectedEmployee(emp); setShowForm(true); }}
          onDelete={(emp) => { setSelectedEmployee(emp); setShowDelete(true); }}
        />
      </div>

      {showForm && (
        <EmployeeFormModal
          employee={selectedEmployee}
          onClose={() => setShowForm(false)}
          onSave={handleSave}
        />
      )}

      {showDelete && (
        <DeleteModal
          employee={selectedEmployee}
          onClose={() => setShowDelete(false)}
          onConfirm={handleDelete}
        />
      )}
    </div>
  );
}

export default App;
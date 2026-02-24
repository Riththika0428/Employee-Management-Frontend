import { useEffect, useState } from "react";
import API from "./services/api";
import Sidebar from "./layout/Sidebar";
import Navbar from "./layout/Navbar";
import DashboardCards from "./components/DashboardCards";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeFormModal from "./components/EmployeeFormModal";
import DeleteModal from "./components/DeleteModal";

function App() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [deleteEmployee, setDeleteEmployee] = useState(null);

  const fetchEmployees = async () => {
    const res = await API.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <DashboardCards employees={employees} />

          <div className="bg-white p-6 rounded-xl shadow mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Employees</h2>

              <button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                + Add Employee
              </button>
            </div>

            <EmployeeTable
              employees={employees}
              setEditingEmployee={setEditingEmployee}
              setDeleteEmployee={setDeleteEmployee}
            />
          </div>
        </div>
      </div>

      {showForm && (
        <EmployeeFormModal
          close={() => setShowForm(false)}
          refresh={fetchEmployees}
        />
      )}

      {editingEmployee && (
        <EmployeeFormModal
          employee={editingEmployee}
          close={() => setEditingEmployee(null)}
          refresh={fetchEmployees}
        />
      )}

      {deleteEmployee && (
        <DeleteModal
          employee={deleteEmployee}
          close={() => setDeleteEmployee(null)}
          refresh={fetchEmployees}
        />
      )}
    </div>
  );
}

export default App;

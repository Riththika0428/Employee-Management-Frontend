import { useState } from "react";
import Navbar from "./layout/Navbar";
import DashboardCards from "./components/DashboardCards";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  const [employees] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@company.com",
      department: "Engineering",
      position: "Senior Developer",
      salary: 95000,
      hireDate: "Mar 15, 2021",
      status: "Active",
    },
    {
      id: 2,
      name: "Bob Martinez",
      email: "bob@company.com",
      department: "HR",
      position: "Manager",
      salary: 72000,
      hireDate: "Jul 1, 2020",
      status: "Active",
    },
    {
      id: 3,
      name: "Carol Williams",
      email: "carol@company.com",
      department: "Marketing",
      position: "Lead",
      salary: 68000,
      hireDate: "Jan 20, 2022",
      status: "Active",
    },
    {
      id: 4,
      name: "David Chen",
      email: "david@company.com",
      department: "Engineering",
      position: "Junior Developer",
      salary: 58000,
      hireDate: "Jun 10, 2023",
      status: "Active",
    },
    {
      id: 5,
      name: "Eva Brown",
      email: "eva@company.com",
      department: "Finance",
      position: "Financial Analyst",
      salary: 77000,
      hireDate: "Nov 5, 2019",
      status: "Inactive",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      <Navbar />
      <div className="p-6 space-y-6">
        <DashboardCards employees={employees} />
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
}

export default App;
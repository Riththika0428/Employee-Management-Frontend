function DashboardCards({ employees }) {
  const totalEmployees = employees.length;
  const totalSalary = employees.reduce(
    (sum, emp) => sum + Number(emp.salary || 0),
    0
  );

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Total Employees</h3>
        <p className="text-3xl font-bold mt-2">{totalEmployees}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-gray-500">Total Salary</h3>
        <p className="text-3xl font-bold mt-2">
          ${totalSalary.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default DashboardCards;
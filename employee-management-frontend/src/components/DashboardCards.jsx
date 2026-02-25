function DashboardCards({ employees }) {
  const total = employees.length;
  const active = employees.filter(e => e.status === "Active").length;
  const inactive = employees.filter(e => e.status === "Inactive").length;
  const avgSalary =
    employees.reduce((acc, e) => acc + e.salary, 0) / total;

  const Card = ({ title, value }) => (
    <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 flex justify-between items-center">
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Total Employees" value={total} />
      <Card title="Active" value={active} />
      <Card title="Inactive" value={inactive} />
      <Card title="Avg. Salary" value={`$${Math.round(avgSalary / 1000)}K`} />
    </div>
  );
}

export default DashboardCards;
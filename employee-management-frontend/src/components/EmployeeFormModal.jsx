import { useState, useEffect } from "react";

function EmployeeFormModal({ employee, onClose, onSave }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    position: "",
    salary: "",
    status: "Active",
  });

  useEffect(() => {
    if (employee) {
      setForm(employee);
    } else {
      setForm({
        name: "",
        email: "",
        department: "",
        position: "",
        salary: "",
        status: "Active",
      });
    }
  }, [employee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Please fill required fields");
      return;
    }

    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-[#111827] p-6 rounded-xl w-96 space-y-4">
        <h2 className="text-lg font-semibold">
          {employee ? "Edit Employee" : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-[#1F2937] p-2 rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-[#1F2937] p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Department"
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
            className="w-full bg-[#1F2937] p-2 rounded"
          />

          <input
            type="text"
            placeholder="Position"
            value={form.position}
            onChange={(e) => setForm({ ...form, position: e.target.value })}
            className="w-full bg-[#1F2937] p-2 rounded"
          />

          <input
            type="number"
            placeholder="Salary"
            value={form.salary}
            onChange={(e) => setForm({ ...form, salary: e.target.value })}
            className="w-full bg-[#1F2937] p-2 rounded"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeFormModal;
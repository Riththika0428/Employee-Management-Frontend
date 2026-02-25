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
    if (employee) setForm(employee);
  }, [employee]);

  const handleSubmit = e => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-[#111827] p-6 rounded-xl w-96 space-y-4">
        <h2 className="text-lg font-semibold">
          {employee ? "Edit Employee" : "Add Employee"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          {["name", "email", "department", "position", "salary"].map(field => (
            <input
              key={field}
              type="text"
              placeholder={field}
              value={form[field]}
              onChange={e => setForm({ ...form, [field]: e.target.value })}
              className="w-full bg-[#1F2937] p-2 rounded"
              required
            />
          ))}

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-600 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmployeeFormModal;
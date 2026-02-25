function DeleteModal({ employee, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center">
      <div className="bg-[#111827] p-6 rounded-xl w-96 space-y-4 text-center">
        <div className="text-red-500 text-3xl">⚠️</div>

        <h2 className="text-lg font-semibold">
          Delete <span className="text-red-500">{employee?.name}</span>?
        </h2>

        <p className="text-gray-400 text-sm">
          This action cannot be undone.
        </p>

        <div className="flex justify-center gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-600 rounded">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 rounded">
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
          
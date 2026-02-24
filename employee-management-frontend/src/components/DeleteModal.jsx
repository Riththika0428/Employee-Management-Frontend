import API from "../services/api";

function DeleteModal({ employee, close, refresh }) {
  const handleDelete = async () => {
    await API.delete(`/employees/${employee.id}`);
    refresh();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-6 rounded w-96 text-center">
        <div className="text-red-600 text-4xl mb-2">⚠</div>

        <h2 className="text-xl font-bold mb-2">
          Delete <span className="text-red-600">{employee.name}</span>?
        </h2>

        <p className="text-gray-500 mb-4">
          This action cannot be undone.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={close}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            CANCEL
          </button>

          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            YES, DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
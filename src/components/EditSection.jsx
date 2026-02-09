import { useState } from "react";

export default function EditSection({ ID, onClose, editTodo, currentText }) {
  const [value, setValue] = useState(currentText);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      bg-white p-4 rounded-lg shadow-lg z-50 "
      >
        <h3 className="text-lg font-bold mb-3">Edit Panel</h3>

        <div className="flex gap-2">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 border rounded px-2 w-80"
          />
          <button
            onClick={() => {
              editTodo(ID, value);
              onClose();
            }}
            className="px-3 py-1 bg-blue-500 text-white rounded"
          >
            Confirm
          </button>
          <button className="px-3 py-1 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import List from "../components/List";
import EditSection from "../components/EditSection";

export default function ListContainer() {
  const [todo, setToDo] = useState(() => {
    const saved = localStorage.getItem("mytodo");
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isEdit, setIsEdit] = useState(null);
  const [filter, setFilter] = useState("all");
  const inputRef = useRef(null);

  const inputTodo = (e) => {
    e.preventDefault();
    const newTask = inputRef.current.value;
    if (newTask.trim() === "") return;
    setToDo((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text: newTask, done: false },
    ]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    setToDo((prev) => prev.filter((item) => item.id !== id));
  };

  const editTodo = (id, newTask) => {
    if (newTask.trim() === "") return;
    setToDo((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newTask } : item)),
    );
  };
  const currentItem = todo.find((item) => item.id === isEdit);
  const toggleTodo = (id) => {
    setToDo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  const toggleEdit = (ID) => {
    if (isEdit === ID) {
      setIsEdit(null);
    } else {
      setIsEdit(ID);
    }
  };

  const counter = todo.reduce(
    (acc, item) => ({
      done: acc.done + (item.done ? 1 : 0),
      remaining: acc.remaining + (item.done ? 0 : 1),
      total: acc.total + 1,
    }),
    {
      done: 0,
      remaining: 0,
      total: 0,
    },
  );

  const filteredTodo = todo.filter((item) => {
    if (filter === "done") return item.done;
    if (filter === "remaining") return !item.done;
    return true;
  });

  useEffect(() => {
    localStorage.setItem("mytodo", JSON.stringify(todo));
  }, [todo]);

  return (
    <div className="px-4 pt-2 pb-5 flex flex-col h-full gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-400">To Do List</h1>
        <div className="bg-blue-400 text-white px-4 py-1 font-bold rounded-md">
          {counter.done} / {counter.total}
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button
          className={`px-3 py-1 rounded-sm cursor-pointer ring-1 ${filter === "all" ? "bg-blue-400 text-white" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded-sm cursor-pointer ring-1 ${filter === "done" ? "bg-blue-400 text-white" : ""}`}
          onClick={() => setFilter("done")}
        >
          Done
        </button>
        <button
          className={`px-3 py-1 rounded-sm cursor-pointer ring-1 ${filter === "remaining" ? "bg-blue-400 text-white" : ""}`}
          onClick={() => setFilter("remaining")}
        >
          Remaining
        </button>
      </div>
      <ul className="flex-1 flex flex-col gap-2 overflow-scroll [overflow-style:none] [scrollbar-width:none]">
        {filteredTodo.map((item) => (
          <List
            key={item.id}
            item={item}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleTodo={toggleTodo}
            toggleEdit={toggleEdit}
          />
        ))}
      </ul>
      <form className="flex gap-3 w-full" onSubmit={inputTodo}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Add task here.."
          className="flex-1 inset-shadow-gray-600 inset-shadow-sm p-2 rounded"
        />
        <button
          className="bg-blue-400 rounded px-10 py-1 font-bold text-white hover:bg-blue-600"
          onClick={inputTodo}
        >
          Add Task
        </button>
      </form>

      {isEdit && currentItem && (
        <EditSection
          ID={isEdit}
          currentText={currentItem.text}
          editTodo={editTodo}
          onClose={() => setIsEdit(null)}
        />
      )}
    </div>
  );
}

import Button from "./Button";

export default function List({ item, deleteTodo, toggleTodo, toggleEdit }) {
  return (
    <li
      className={`flex justify-between p-2 rounded-md ${item.done ? "bg-gray-300" : "bg-slate-200"}`}
    >
      <div className="flex items-center gap-5 px-1">
        <div
          onClick={() => toggleTodo(item.id)}
          className="w-4 h-4 rounded-full border border-black flex items-center justify-center cursor-pointer"
        >
          {item.done && <div className="w-2 h-2 rounded-full bg-black"></div>}
        </div>

        {item.text}
      </div>
      <div className="flex gap-3 px-2">
        <Button onClick={() => toggleEdit(item.id)} variant={"edit"} />
        <Button onClick={() => deleteTodo(item.id)} variant={"delete"} />
      </div>
    </li>
  );
}

import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function Button({ onClick, variant }) {
  const icon = () => {
    if (variant === "edit") return <FaEdit />;
    if (variant === "delete") return <FaTrash />;
  };

  const style = () => {
    if (variant === "edit") return "bg-amber-400 p-2 rounded-sm cursor-pointer";
    if (variant === "delete") return "bg-red-400 p-2 rounded-sm cursor-pointer";
  };

  return (
    <button onClick={onClick} className={style()}>
      {icon()}
    </button>
  );
}

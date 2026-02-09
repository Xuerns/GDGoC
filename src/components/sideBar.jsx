import { useState } from "react";
import { Link } from "react-router";
import { RiMenuFold4Line } from "react-icons/ri";
import { RiMenuFold3Line } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function SideBar() {
  const [isExtend, setIsExtend] = useState(false);
  const [active, setActive] = useState("todo");

  return (
    <div
      className={`flex flex-col gap-5 shadow-xl p-2 inset-shadow-black h-screen duration-500 ease-in-out transition-all ${isExtend ? "xl:w-50  2xl:w-60" : "xl:w-15"}`}
    >
      <button
        onClick={() => setIsExtend(!isExtend)}
        className={`flex w-full ${isExtend ? "justify-end" : "justify-center"}`}
      >
        {isExtend ? (
          <RiMenuFold3Line className="w-5 h-5" />
        ) : (
          <RiMenuFold4Line className="w-5 h-5" />
        )}
      </button>
      <div className="flex flex-col justify-center items-center">
        <FaReact className="fill-blue-400 animate-spin w-11 h-11" />
        <h2
          className={`font-semibold ${isExtend ? "" : "opacity-0 absolute whitespace-nowrap"}`}
        >
          To Do List
        </h2>
      </div>
      <div className="flex flex-col overflow-hidden gap-3">
        <div>
          <Link
            to="/section/todo"
            className={`flex items-center gap-2 duration-500 ease-in-out transition-all rounded p-2 ${active === "todo" ? "bg-blue-400 text-white" : "bg-blue-200"} ${isExtend ? "" : "justify-center"}`}
            onClick={() => setActive("todo")}
          >
            <CiBoxList className="w-5 h-5" />
            <span
              className={`whitespace-nowrap  ${isExtend ? "" : "opacity-0 absolute"}`}
            >
              To Do List
            </span>
          </Link>
        </div>
        <div>
          <Link
            to="/section/profile"
            className={`flex items-center gap-2 duration-500 ease-in-out transition-all rounded p-2 whitespace-nowrap overflow-hidden ${active === "profile" ? "bg-blue-400 text-white" : "bg-blue-200"} ${isExtend ? "" : "justify-center"}`}
            onClick={() => setActive("profile")}
          >
            <CgProfile className="w-5 h-5" />
            <span
              className={`whitespace-nowrap ${isExtend ? "" : "opacity-0 absolute"}`}
            >
              Profile
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

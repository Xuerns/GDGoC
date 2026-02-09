import { Outlet } from "react-router";
import SideBar from "../components/sideBar";

export default function Sections() {
  return (
    <div className="relative flex">
      <SideBar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

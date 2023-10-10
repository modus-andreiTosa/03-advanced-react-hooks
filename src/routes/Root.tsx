import { Outlet } from "react-router-dom";
import { SideBar } from "../components";

export function Root() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="px-14 py-8 w-full bg-indigo-100 ">
        <Outlet />
      </div>
    </div>
  );
}

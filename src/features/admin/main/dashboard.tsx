import { Outlet } from "react-router-dom";
import Sidebar from "../pages/sidebar"

export default function Dashboard() {
  return (
    <div className="flex  min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-zinc-950 bg-gray-50 p-6">
        <Outlet />
      </div>
    </div>
  );
}
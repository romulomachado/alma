"use client";

import { redirect } from "next/navigation";
import { logout } from "../auth";

export default function Sidebar() {
  const handleLogout = async () => {
    logout();
    redirect("/login");
  };

  return (
    <aside className="w-64 p-6 space-y-6 border-r border-gray-200 flex flex-col">
      <h1 className="text-2xl font-bold">alma</h1>
      <nav className="space-y-2 flex-1">
        <a href="#" className="block hover:text-gray-300">
          Leads
        </a>
        <a href="#" className="block hover:text-gray-300">
          Settings
        </a>
      </nav>
      <button onClick={handleLogout}>Log out</button>
    </aside>
  );
}

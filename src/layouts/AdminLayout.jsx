// src/pages/admin/AdminLayout.jsx
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <Link to="/admin" className="block hover:underline">Home</Link>
          <Link to="/admin/dashboard" className="block hover:underline">Dashboard</Link>
          <Link to="/admin/about" className="block hover:underline">About</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}

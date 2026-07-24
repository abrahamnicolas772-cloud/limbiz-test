export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-white text-xl font-bold">Limbiz Admin</h1>
          <div className="flex gap-4 text-gray-300 text-sm">
            <a href="/admin" className="hover:text-white">Dashboard</a>
            <a href="/admin/users" className="hover:text-white">Users</a>
            <a href="/admin/orders" className="hover:text-white">Orders</a>
            <a href="/admin/documents" className="hover:text-white">Documents</a>
            <a href="/admin/notifications" className="hover:text-white">Notifications</a>
            <a href="/admin/support" className="hover:text-white">Support</a>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}

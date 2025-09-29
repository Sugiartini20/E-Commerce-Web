// src/pages/admin/AdminDashboard.jsx
import { useOrders } from "../../context/OrderContext";

export default function AdminDashboard() {
  const { orders } = useOrders();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">Belum ada pesanan masuk.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Alamat</th>
              <th className="border p-2">Pembayaran</th>
              <th className="border p-2">Pesanan</th>
              <th className="border p-2">Total</th>
              <th className="border p-2">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index} className="text-center">
                <td className="border p-2">{order.name}</td>
                <td className="border p-2">{order.email}</td>
                <td className="border p-2">{order.address}</td>
                <td className="border p-2">{order.payment}</td>
                <td className="border p-2 text-left">
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.id}>
                        {item.name} x {item.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="border p-2">Rp {order.total.toLocaleString()}</td>
                <td className="border p-2">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

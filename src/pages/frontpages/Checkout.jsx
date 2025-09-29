// src/pages/frontpages/Checkout.jsx
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";
import { useState } from "react";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrders();
  const [submitted, setSubmitted] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);

      const orderData = {
        name: formData.get("name"),
        email: formData.get("email"),
        address: formData.get("address"),
        payment: formData.get("payment"),
        items: cart,
        total,
        date: new Date().toLocaleString(),
      };

      console.log("🚀 OrderData:", orderData);

      addOrder(orderData);   // simpan ke OrderContext
      clearCart();           // kosongkan cart
      setSubmitted(true);    // tampilkan notifikasi berhasil
    } catch (error) {
      console.error("❌ Error saat submit:", error);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold mb-4 text-green-600">Pesanan Berhasil!</h1>
        <p className="text-lg">Terima kasih sudah berbelanja di MyShop 🎉</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center">
        <h1 className="text-xl font-bold">Keranjang Kosong</h1>
        <p className="text-gray-600">Silakan kembali dan pilih produk terlebih dahulu.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Nama Lengkap</label>
          <input name="name" type="text" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input name="email" type="email" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-semibold">Alamat</label>
          <textarea name="address" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-semibold">Metode Pembayaran</label>
          <select name="payment" required className="w-full border p-2 rounded">
            <option value="">Pilih metode pembayaran</option>
            <option value="transfer">Transfer Bank</option>
            <option value="cod">COD</option>
            <option value="ewallet">E-Wallet</option>
          </select>
        </div>

        {/* Ringkasan */}
        <div className="border p-4 rounded">
          <h2 className="font-bold mb-2">Ringkasan Pesanan</h2>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.name} x {item.quantity}</span>
              <span>Rp {(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}
          <hr className="my-2" />
          <p className="text-right font-bold">Total: Rp {total.toLocaleString()}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Konfirmasi Pesanan
        </button>
      </form>
    </div>
  );
}

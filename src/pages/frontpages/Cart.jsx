// src/pages/frontpages/Cart.jsx
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Keranjang</h1>
        <p>Keranjang masih kosong.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Keranjang</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">
                  Rp {item.price.toLocaleString()} x {item.quantity}
                </p>
                <p className="font-bold">
                  Rp {(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <h2 className="text-xl font-bold">
          Total: Rp {total.toLocaleString()}
        </h2>
        <Link
          to="/checkout"
          className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Lanjut ke Checkout
        </Link>
      </div>
    </div>
  );
}

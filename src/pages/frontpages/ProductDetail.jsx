import { useParams, useNavigate } from "react-router-dom";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ ambil dari context

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Produk tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 flex gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-80 h-80 object-cover rounded"
      />

      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="text-green-600 text-xl font-semibold mb-2">
          Rp {product.price.toLocaleString()}
        </p>
        <p className="flex items-center gap-2 mb-4">
          ⭐ {product.rating} ({product.reviews} ulasan)
        </p>
        <p className="mb-4">{product.description}</p>
        <p className="mb-4">Stok: {product.stock}</p>

        <div className="flex gap-4">
          <button
            onClick={() => addToCart(product)} // ✅ langsung pakai context
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Tambah ke Keranjang
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import products from "../../data/products";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Daftar Produk</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <span className="text-sm text-blue-600">{product.category}</span>
            <h2 className="text-lg font-semibold mt-1">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">
              ⭐ {product.rating} ({product.reviews} ulasan)
            </p>
            <p className="text-green-600 font-bold mb-2">
              Rp {product.price.toLocaleString("id-ID")}
            </p>
            <p className="text-sm text-gray-500 mb-3">Stok: {product.stock}</p>

            <Link
              to={`/product/${product.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded block text-center hover:bg-blue-700"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="font-bold text-lg">
        MyShop
      </Link>
      <div className="space-x-4">
        <Link to="/cart">Keranjang ({cartCount})</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}

export default Navbar;

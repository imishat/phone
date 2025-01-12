import { ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10">
      <h1 className="text-3xl font-bold">Logo</h1>
      <ul className="flex items-center font-semibold gap-5">
        <li className="cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/login">
            <User />
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/cart">
            <ShoppingCart />
          </Link>
        </li>
      </ul>
    </div>
  );
}

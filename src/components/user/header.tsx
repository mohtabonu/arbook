import type { FunctionComponent } from "react";
import { Search, User, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4 px-6 ">
      {/* Логотип */}
      <Link to="/" className="flex items-end gap-3">
        <img width="80" src="/assets/icon.png" alt="logo" />
        <h2 className="font-bold text-[35px] text-orange-600">AR BOOK</h2>
      </Link>

      {/* Поисковая строка */}
      <div className="flex items-center gap-2 bg-white border border-orange-600 rounded-2xl px-4 py-2 shadow-sm w-full max-w-md mx-4">
        <Search className="text-orange-600 w-5 h-5" />
        <input
          type="text"
          placeholder="Qidirish..."
          className="outline-none w-full text-sm text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Иконки пользователя и корзины */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition"
        >
          <User className="w-6 h-6 text-orange-600" />
          Kirish
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition"
        >
          <ShoppingCart className="w-6 h-6 text-orange-600" />
          Savat
        </button>
      </div>
    </div>
);
}

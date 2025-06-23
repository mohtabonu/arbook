import type { FunctionComponent } from "react";
import { books } from "./db";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./cart-context";
import { useNavigate } from "react-router-dom";

const Shop: FunctionComponent = () => {
  const { dispatch } = useCart();
  const navigate = useNavigate();

  const handleAdd = (book: typeof books[0]) => {
    dispatch({ type: 'ADD', payload: { id: book.id, title: book.title, price: book.price, img: book.img } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 my-5">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          onClick={() => navigate(`/about/${book.id}`)}
        >
          <img
            src={book.img}
            alt={book.title}
            className="w-full h-48 object-cover rounded-t-2xl"
          />
          <div className="p-4 flex flex-col justify-between h-40">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
              <p className="text-orange-600 font-bold mt-1">${book.price}</p>
            </div>
            <button
              className="mt-4 flex items-center justify-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700 transition"
              onClick={e => {
                e.stopPropagation();
                handleAdd(book);
              }}
            >
              <ShoppingCart className="w-4 h-4" />
              Savatga qo‘shish
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;

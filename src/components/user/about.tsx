import type { FunctionComponent } from "react";
import { useParams, useLocation } from "react-router-dom";
import { books } from "./db";

const About: FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const book = books.find((b) => b.id === id);

  if (!book) return <p className="text-center text-red-500 mt-10">Книга не найдена</p>;

  console.log('Навигировали с:', location.state);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
      <div className="md:flex">
        {/* Блок с изображением */}
        <div className="md:w-1/2 flex justify-center items-center bg-gray-50 p-6">
          <img
            src={book.img}
            alt={book.title}
            className="w-full max-w-xs rounded-lg object-cover"
          />
        </div>
        {/* Блок с информацией */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">{book.title}</h1>
            <p className="text-orange-600 text-2xl font-bold mb-6">${book.price}</p>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>
          <button
            className="mt-8 self-start bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-xl transition"
            onClick={() => window.history.back()}
          >
            ← Orqaga qaytish
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

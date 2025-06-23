import type { FunctionComponent } from "react";
import { useCart } from "./cart-context";
import { Trash2, Plus, Minus } from "lucide-react";

const Cart: FunctionComponent = () => {
  const { state: { items }, dispatch } = useCart();

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (items.length === 0) {
    return <p className="text-center mt-10 text-gray-600">Корзина пуста</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-6">Ваша корзина</h1>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-orange-600">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => dispatch({ type: 'DECREASE', payload: { id: item.id } })}>
                <Minus className="w-4 h-4" />
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch({ type: 'INCREASE', payload: { id: item.id } })}>
                <Plus className="w-4 h-4" />
              </button>
              <button onClick={() => dispatch({ type: 'REMOVE', payload: { id: item.id } })}>
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between">
        <button
          className="flex items-center gap-2 text-red-600 hover:underline"
          onClick={() => dispatch({ type: 'CLEAR' })}
        >
          <Trash2 className="w-5 h-5" /> Очистить всё
        </button>
        <p className="text-xl font-bold">Итого: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;

import React, { createContext, useContext, useReducer } from 'react';
import type { ReactNode as RN } from 'react';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  img: string;
  quantity: number;
}

type State = {
  items: CartItem[];
};

type Action =
  | { type: 'ADD'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE'; payload: { id: string } }
  | { type: 'INCREASE'; payload: { id: string } }
  | { type: 'DECREASE'; payload: { id: string } }
  | { type: 'CLEAR' };

const initialState: State = { items: [] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        return {
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE':
      return { items: state.items.filter(i => i.id !== action.payload.id) };
    case 'INCREASE':
      return {
        items: state.items.map(i =>
          i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      };
    case 'DECREASE':
      return {
        items: state.items
          .map(i =>
            i.id === action.payload.id
              ? { ...i, quantity: Math.max(1, i.quantity - 1) }
              : i
          )
          .filter(i => i.quantity > 0),
      };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const CartProvider: React.FC<{ children: RN }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

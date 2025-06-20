import type { FunctionComponent } from "react";
import { Search,User,ShoppingCart } from "lucide-react";

export const Header: FunctionComponent = () => {
    return ( 
        <div className="flex items-center justify-between">
            <a href="index.html" className="flex items-end gap-3">
                <img width="80px" src="./src/assets/icon.png" alt="logo" />
                <h2 className="font-bold text-[35px] text-orange-600 ">AR BOOK</h2>
            </a>

             <div className="flex items-center gap-2 bg-white border border-orange-600 rounded-2xl px-4 py-2 shadow-sm w-full max-w-md">
                <Search className="text-orange-600 w-5 h-5" />
                <input
                    type="text"
                    placeholder="Qidirish..."
                    className="outline-none w-full text-sm text-gray-700 placeholder-gray-400"
                />
            </div>

            <div className="flex gap-4">
                <button className="flex gap-1 text-gray-500 cursor-pointer">
                  <User className="w-6 h-6 text-orange-600" />
                  Kirish
                </button> 
                <button className="flex gap-1 text-gray-500 cursor-pointer">
                   <ShoppingCart className="w-6 h-6 text-orange-600" />
                   Savat
                </button>
            </div>
        </div>
     );
}
 

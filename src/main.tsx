import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Main from './components/user/main';
import { CartProvider } from './components/user/cart-context';



const root = createRoot(document.getElementById("root")!);

root.render(
	<StrictMode>
		<CartProvider>
			
			<Main />
		</CartProvider>
	</StrictMode>
);

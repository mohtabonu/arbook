import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Main from './components/user/main';


const root = createRoot(document.getElementById("root")!);

root.render(
	<StrictMode>
		<Main />
	</StrictMode>
);

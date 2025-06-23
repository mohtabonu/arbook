import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './shop';
import About from './about';
import { Header } from './header';
import Cart from './cart';

function App() {
    return (
        <div className="container mx-auto py-6 px-12">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about/:id" element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

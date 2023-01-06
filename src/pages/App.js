import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar.js';
// import '../styles/tailwind.css';
import ListPage from './listPage.js';
import CartPage from './cartPage.js';
import DetailPage from './detailPage.js';

function App() {
  return (
    <div className="bg-blue-300">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:productId" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

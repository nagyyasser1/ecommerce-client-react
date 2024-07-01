import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { Product } from "./types";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

const sampleProduct: Product = {
  id: "1",
  name: "T-Shirt",
  slug: "sample-product",
  description: "This is a sample product description.",
  short_description: "Sample short description.",
  price: 49.99,
  old_price: 59.99,
  page_title: "Sample Product Page",
  meta_description: "This is the meta description of the sample product page.",
  category: { id: "1", name: "Category 1", picUrl: "/category1.png" },
  tags: ["tag1", "tag2"],
  images: [
    "https://static.zara.net/assets/public/85fd/909d/8ae24329aee2/1f0c0f09dbd2/01887450250-a1/01887450250-a1.jpg?ts=1705564337541&w=824",
    "https://sc04.alicdn.com/kf/HTB1gSNzdDfN8KJjSZFjq6xGvpXah.jpg",
    "https://image.made-in-china.com/2f0j00ZCMcANbFNqki/Men-T-Shirts-Manufacturer-100-Cotton-Unisex-High-Quality-T-Shirt-for-Men-T-Shirt-with-Logo-Print-Drop-Shoulder-Heavyweight-Plain-T-Shirt.webp",
  ],
  variants: [
    { color: "white", count: 10, size: 8 },
    { color: "white", count: 10, size: 1 },
    { color: "red", count: 10, size: 8 },
    { color: "red", count: 7, size: 7 },
    { color: "blue", count: 5, size: 10 },
  ],
};

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          path="/products/:id"
          element={<ProductDetails product={sampleProduct} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import PaymentSuccess from "./Pages/PaymentSuccess";
import Product from "./Pages/Products";
import UserDetails from "./Pages/UserDetails";
import Login from "./Pages/Login";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/userDetails" element={<UserDetails/>} />
            <Route path="/paymentSuccess" element={<PaymentSuccess/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
        <Toaster position="botton-right"/>
    </>
  )
}

export default App

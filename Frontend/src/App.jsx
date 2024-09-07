import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import PaymentSuccess from "./Pages/PaymentSuccess";
import Product from "./Pages/Products";
import UserDetails from "./Pages/UserDetails";

function App() {
  return (
    <>
      <Header/>
        {/* <Home/> */}
        {/* <Product/> */}
        {/* <Cart/> */}
        {/* <UserDetails/> */}
        <PaymentSuccess/>
      <Footer/>
    </>
  )
}

export default App

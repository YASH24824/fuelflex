import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Ourstory from "./pages/Ourstory";
import News from "./pages/News";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Alldetails from "./pages/Alldetails";
import Carrer from "./pages/Carrer";
import Contactus from "./pages/Contactus";
import Cart from "./pages/Cart"
import Fullnews from "./pages/Fullnews"
import Login from "./pages/Account/Login.jsx"
import Signup from "./pages/Account/Signup.jsx";
function App(){
  return(
    <>
     <Router>
     <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/ourstory" element={<Ourstory />} />
        <Route path="/news" element={<News />} />
        <Route path="/carrer" element={<Carrer/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shop/alldetails/:urls" element={<Alldetails/>}/>
        <Route path="/news/:id" element={<Fullnews/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer />
    </Router>

    </>
  )
}
export default App
import {Routes, Route} from "react-router-dom"

import "./App.css";

// assets de bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// components
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import CategoryProducts from "./components/CategoryProducts";
import AllProducts from "./components/AllProducts";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
// customer panel
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import OrderSuccess from "./components/OrderSucces";
import OrderFailure from "./components/OrderFailure";
import TagProducts from "./components/TagsProducts";
import Wishlist from "./components/Customer/Wishlist";
import Profile from "./components/Seller/Profile";
import ChangePassword from "./components/Seller/ChangePassword";
import AddressList from "./components/Seller/AddresList";
import AddAddress from "./components/Customer/AddAddress";
import Customer from "./components/Seller/Customer";
import CustomerLogout from "./components/Customer/CustomerLogout";



// seller pabel
import SellerRegister from "./components/Seller/SellerRegister";
import SellerLogin from "./components/Seller/SellerLogin";
import SellerDashboard from "./components/Seller/SellerDashboard";
import SellerProducts from "./components/Seller/SellerProducts";
import AddProducts from "./components/Seller/AddProducts";
import VendorOrders from "./components/Seller/VendorOrders";



import { CartContext } from "./Context";
import { useState } from "react";
const checkCart = localStorage.getItem('cartData')

function App() {
  const [cartData, setCartData] = useState(JSON.parse(checkCart))
  return (

    <CartContext.Provider value={{cartData, setCartData}}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/" element={<AllProducts />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/category/:category_slug/:category_id" element={<CategoryProducts />} />
        <Route path="/products/:tag" element={<TagProducts />} />
        <Route path="/product/:product_slug/:product_id" element={<ProductDetail />} />        
        <Route path="/checkout/" element={<Checkout/>}/>
        <Route path="/order/success" element={<OrderSuccess/>}/>
        <Route path="/order/failure" element={<OrderFailure/>}/>

        {/* customer routes */}
        <Route path="/customer/register" element={<Register/>}/>
        <Route path="/customer/login" element={<Login/>}/>
        <Route path="/customer/logout" element={<CustomerLogout/>}/>
        <Route path="/customer/dashboard" element={<Dashboard/>}/>
        <Route path="/customer/Orders" element={<Orders/>}/>
        <Route path="/customer/add-address" element={<AddAddress/>}/>
        <Route path="/customer/wishlist" element={<Wishlist/>}/>





        {/* seller routes */}
        <Route path="/seller/register" element={<SellerRegister/>}/>
        <Route path="/seller/login" element={<SellerLogin/>}/>
        <Route path="/seller/dashboard" element={<SellerDashboard/>}/>
        <Route path="/seller/products" element={<SellerProducts/>}/>
        <Route path="/seller/add-product" element={<AddProducts/>}/>
        <Route path="/seller/orders" element={<VendorOrders/>}/>
        <Route path="/seller/customers" element={<Customer/>}/>        
        <Route path="/seller/profile" element={<Profile/>}/>
        <Route path="/seller/change-password" element={<ChangePassword/>}/>
        <Route path="/seller/addresses" element={<AddressList/>}/>

        

      </Routes>
      <Footer/>
      
    </CartContext.Provider>
  );
}

export default App;

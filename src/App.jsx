import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import SearchPage from "./pages/SearchPage";
import CoinPage from "./pages/CoinPage";
import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/coin/search/:searchquery" element={<SearchPage/>}/>
        <Route path="/coin/:id" element={<CoinPage/>}/>
      </Routes>
      <ToastContainer />
      <Theme/>
    </Router>
  );
};

export default App;

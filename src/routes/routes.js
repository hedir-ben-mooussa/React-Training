import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/home";
import ErrorPage from "../view/notfoundpage";
import Whyus from "../view/WhyUs";
import Faq from "../view/faq";
import About from "../view/about";
import Testimonial from "../view/testimonial";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/why-us" element={<Whyus />}></Route>
        <Route path="/Testimonial" element={<Testimonial />}></Route>
        <Route path="/Faq" element={<Faq />}></Route>
        <Route path="/About" element={<About />}></Route>



        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
  );
};

export default AppRoutes;

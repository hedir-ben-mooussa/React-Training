import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AppRoutes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

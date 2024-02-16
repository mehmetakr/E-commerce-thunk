import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpages from "./pages/Mainpages";
import Basketpages from "./pages/Basketpages";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* Her sayfada gözikmesini istediğimiz için header sayfasını routes un dışında import ettik */}
        <Header />
        <Routes>
          <Route path="/" element={<Mainpages />} />
          <Route path="/sepet" element={<Basketpages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;

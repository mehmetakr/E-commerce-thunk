import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  // store dosyasında tanımladıgımız store u import ettık ve provider ile sarmaladık ki tüm app dosyamız içerisinde yaptıgımız değişiklikler gözüksün 
  <Provider store={store}>
    <App />
  </Provider>
);

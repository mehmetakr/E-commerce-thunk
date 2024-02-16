import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const state = useSelector((store) => store.basket);

  // console.log(state.basket);

  // js de dizilerde fiyatları toplamak için reduce methodu kullanılabilir.
  // 2 parametre alır. 1. fonksiyon  2. kaçtan saymaya başlıyıcaz

  // Bu şekilde sepetteki toplam eleman sayısına ulaşmış oluyoruz.Bütün ürünlerin amount değerlerine ulaşmış olduk.
  const totalamount =
    state.basket.length > 0
      ? state.basket.reduce((total, item) => total + item.amount, 0)
      : 0;

  return (
    <nav className="navbar bg-body-tertiary position-sticky  top-0 z-3 shadow shadow-lg ">
      <Link to="/" className="navbar-brand">
        <img
          src="vite.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        React Redux
      </Link>

      <div className=" d-flex gap-5 px-5 ">
        <NavLink to="/">Anasayfa</NavLink>
        <NavLink to="/sepet">
          <span> Sepet</span>
          <span className=" badge bg-danger">{totalamount}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;

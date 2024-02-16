import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtobasket, updateItem } from "../redux/action/basketactions";

const Card = ({ product }) => {
  //sepetteki verilere ihtiyacımız oldugu ıçin store a abone olmamız lazım
  const state = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  addtobasket();

  //Eğerki ekrana basıtgımız elemandan sepette varsa miktarı arttır butonu koy sepette yoksa sepete ekle butonu koyucaz

  const found = state.basket.find((item) => item.id === product.id);
  console.log("buluundu ", found);

  console.log(product.id);

  //Ürün sepette varsa miktarını arttır yoksa sepete ekle o yeni ürünü
  const handleclick = () => {
    if (found) {
      dispatch(updateItem(found));
    }
    else{

dispatch(addtobasket(product))

    }
  };

  return (
    <div className="card pt-4" style={{ width: "18rem" }}>
      <div className=" d-flex justify-content-center ">
        <img
          src={product.image}
          width={200}
          height={200}
          className="rounded "
          alt="image"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p>
          {" "}
          <span className="fw-bold me-3">{product.make}</span>
          <span>{product.model}</span>
        </p>

        <p className="d-flex flex-column">
          {product.specs.map((spec, index) => (
            <span key={index}>{spec}</span>
          ))}
        </p>

        <h4>{product.price} ₺</h4>

        <button onClick={handleclick} className="w-100 ">
          {found ? `Miktarı arttır (${found.amount})` : `Sepete Ekle`}
        </button>
      </div>
    </div>
  );
};

export default Card;

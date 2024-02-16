import React from "react";
import { useDispatch } from "react-redux";
import { deleteitem, updateItem } from "../redux/action/basketactions";

const Basketitem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="rounded p-4 bg-white text-black d-flex justify-content-between mb-5  align-items-center ">
      <div className="d-flex px-5 gap-5 align-items-center">
        <img width={60} height={60} src={item.image} alt="" />

        <h4>
          <span>{item.make}</span>
          <span>{item.model}</span>
        </h4>
        <h4 className="text-success">{item.price} ₺</h4>
      </div>

      <div className="d-flex gap-4 align-items-center">
        <span>Miktar : {item.amount} </span>

        <button
          onClick={() => dispatch(updateItem(item))}
          className="btn btn-sm btn-primary"
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(deleteitem(item.id));
          }}
          className="btn btn-sm btn-danger"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Basketitem;

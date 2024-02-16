import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getbasket } from "../redux/action/basketactions";
import Basketitem from "../components/Baskketitem";
import Loading from "../components/Loading";

const Basketpages = () => {
  const state = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getbasket());
  }, []);

  //Ürünlerin toplam fiyatını hesaplama bunun için reduce methodunu kullanabiliriz.

  const totalprice = state.basket.reduce(
    (total, item) => total + item.price * item.amount,
    0
  );

  // sepetteki ürünleri alıp store ' a aktaran asenkron askiyon yazacağız.

  //Burda dispatc h ile işlem gönderdik getbasket sayesinde .
  // Ve sıra ile verilerin yüklenmesi aksiyonu i eger veriler gelirse
  // verileri çekme işlemi(get) ve eğer herhangi bir hata varsa hatayı
  // yakalayıp ekrana yazdırma adımları izlendi
  // dispatch ile store e aktatma işlemı olur
  //

  return (
    <div className="row px-4 py-5">
      {state.isloading && <Loading />}
      {state.iserror && (
        <p className="text-center my-5 fw-bold ">
          Üzgünüz bir hata aladik hataniz {state.iserror}{" "}
        </p>
      )}

      <div className="col-md-8">
        {/*  İsteğin başarılı olması halinde gelicek veriler ise  verileri ekrana basıcagıımız için .  state in içindeki basketi map edicez  adıne veri diyicez ve ekrana basıcaz  */}

        {state.basket.map((item) => (
          // Her bir  item için ekrana sepet elemanı basmamız lazım
          <Basketitem item={item} key={item.id} />
        ))}
      </div>

      <div className="col-md-4 justify-content-between align-items-center">
        <div className="bg-white rounded  p-5 w-100">
          <h5 className="text-black text-center ">
            Toplam Tutar : {totalprice}
          </h5>
          <button className="btn btn-primary w-100 my-4   ">
            Alışverişi Tamamla
          </button>
        </div>
      </div>
    </div>
  );
};
export default Basketpages;

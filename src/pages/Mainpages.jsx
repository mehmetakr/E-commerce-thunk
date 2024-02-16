import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  seterror,
  setloading,
  setproducts,
  takeproduct,
} from "../redux/action/productsActions";
import Loading from "../components/Loading";
import Card from "../components/card";
import { getbasket } from "../redux/action/basketactions";
const Mainpages = () => {
  const dispatch = useDispatch();

  // Bu kısımda useselector ile store daki product verilerimize ulaşmayı seçtik .
  // Useselector : Redux store undan belirli bir parçayı (state) seçmemize olanak tanır.

  // APİ den aldıgımız tüm verileri store da tutarız. Veriler alındı  mı yüklendi mi hata oldumu hangi kısımdayız . Hepsini store da tutarız.

  const state = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(setloading());
    dispatch(getbasket());

    /*  axios
      .get("http://localhost:3050/products")
      // başarılı olunca verileri store a gönderdik
      .then((response) => dispatch(setproducts(response.data)))
      // hata olunca olan hatayı store a gonderdik
      .catch((error) => dispatch(seterror(error))); */

    dispatch(takeproduct());
  }, []);

  return (
    <div>
      {/*  Veriler yükleniyorsa  */}
      {state.isloading && <Loading />}
      {/* Hata olustuysa  hatayı ekrana bas */}
      {state.iserror && (
        <p className="text-center my-5 fw-bold">
          {" "}
          Üzgünüz verileri alirken bir hata oluştu {state.iserror}
        </p>
      )}

      {/* Hata olmadiysa eger */}

      {/*  Verile yüklensiyse ve eğer hata yoksa  ekrana bas */}
      <div className="d-flex flex-wrap  justify-content-center gap-5 my-5 ">
        {state.products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Mainpages;

import axios from "axios";
import { Actiontypes } from "../actiontTypes";

// senkron  aksiyon
// tek görevi basit bir obje olusturmak

export const setloading = () => ({
  type: Actiontypes.SET_BASKET_LOADİNG,
});

export const seterror = (payload) => ({
  type: Actiontypes.SET_ERROR,
  payload,
});
export const setproducts = (payload) => ({
  type: Actiontypes.SET_PRODUCTS,
  payload,
});

// asenkron aksiyon
// APİ isteği atıp elde ettiği cevaba göre reducerı bilgilendiren kapsamlı aksiyon
// klasil redux ta aksiyonlarımız asenkron olamaz
// Ama bu sorunu redux thunk middleweare i kullanarak çözebiliriz.
//Redux thunk sayesinde aksiyonlarımız api istekleri atabilir.

// thunk function

//Normal aksıyonda sadece basit bir obje döndurmez
//Redux thunk aksiyon ise bir fonskyon döndürür. dispatch parametre olarak alıyor axios ile get işlemleri yapıp store a durumu bildiiroyruz.

export const takeproduct = () => (dispatch) => {
  dispatch(setloading());

  const veri = axios
    .get("http://localhost:3050/products")
    .then((res) => dispatch(setproducts(res.data)))
    .catch((error) => dispatch(error.message));
};

//THUNK AKSIYONU BU SEKİLDE OLABİLİYO
function ornekfonksiyon() {
  return async function (dispatch) {
    // asenkron işlemler yapıyoruz.
    // store a  bildirme > dispatch

    const data = await axios.get("...");
    dispatch({ type: "SET_VERI  " });
  };
}

// ok fonksiyonu ile yazım şekli

// Burda yazdıgımız aksiyonlar asenkron işlemler yapıp APİ ile haberleşebilicek
const yenifonk = () => async (dispatch) => {
  const data = await axios.get("...");

  dispatch({ type: "SET_VERİ" });
};

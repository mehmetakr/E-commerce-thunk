import axios from "axios";
import { Actiontypes } from "../actiontTypes";

// asenkron thunk aksiyonu
// Verileri sepet verilerini çekip aşama reducer a bildirme
export const getbasket = () => (dispatch) => {
  //reducer a verilerinin yüklendiğini haber verdik.

  dispatch({ type: Actiontypes.SET_BASKET_LOADİNG });

  //verileri çekicez
  axios
    .get("http://localhost:3050/basket")
    .then(
      (res) =>
        // istek bassarılı olursa  verileri reducera aktarma işlemi
        dispatch({
          type: Actiontypes.SET_BASKET,
          payload: res.data,
        })
      // istek başarısız olursa hatayı reducer a aktarıcaz.
    )
    .catch((err) =>
      dispatch({ type: Actiontypes.SET_BASKET_ERROR, payload: err })
    );
};

// Sepete yeni eleman eklemeye yarayan bir aksiyon yazıcaz....
//Hem APİ yi günceller hemde store u

export const addtobasket = (product) => (dispatch) => {
  // Yeni bir obje olusturup miktarı 1 olarak ekle
  //  1 ) yani sepete hiç olmayan ürünün  adetini 1 olarak güncellememiz lazım
  const yeniürün = { ...product, amount: 1 };

  // 2 )objeden gereksiz ürünleri kaldır

  delete yeniürün.specs;
  delete yeniürün.color;
  delete yeniürün.title;

  // 3 ) APİ ye ürünü kaydet

  axios
    .post("http://localhost:3050/basket", yeniürün)

    // 4) Store a aktarma güncelleme işlemidir. ( Yeni ürünü ekle )
    .then(() => {
      dispatch({ type: Actiontypes.ADD_TO_BASKET, payload: yeniürün });
    });
  // şimdi verileri tamamen alıp verilerden sadece birisini değiştirmemmız lazım .Yani amount degerıni eklemememiz lazım

  console.log(product);
};

// sepette olan elemanın miktarını 1 arttırır
// asenkron thunk aksıyonlarımız .Aksıyonlarımız bu sayede thunk ile APİ isteği yapabılıyoruz.
export const updateItem = (product) => (dispatch) => {
  axios
    .patch(`http://localhost:3050/basket/${product.id}`, {
      amount: product.amount + 1,
    })
    .then(() => {
      dispatch({ type: Actiontypes.UPDATE_ITEM, payload: product.id });
    });
};

// sepetteki elemanı silen bir istek atıcaz .

export const deleteitem = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3050/basket/${id}`)
    //Api isteği başarılı olursa store'dan kaldırma işlemı yapıcaz.Yani görunür ekranda gerçek zamanlı olarak değişşimi görebilmemiz lazım..
    //Burda hem api güncellme işlemı yapılıyo hemde  reducera birşeyin silinmesı işlemı aktarılmıs olucak .
    .then(() => {
      dispatch({
        type: Actiontypes.REMOVE_ITEM,
        payload: id,
      });
    });
};

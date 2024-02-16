import { Actiontypes } from "../actiontTypes";

const initialstate = {
  iserror: false,
  isloading: false,
  basket: [],
};

const basketreducers = (state = initialstate, action) => {
  switch (action.type) {
    case Actiontypes.SET_BASKET_LOADİNG:
      return { ...state, isloading: true };

    case Actiontypes.SET_BASKET_ERROR:
      return { ...state, isloading: false, iserror: action.payload };

    case Actiontypes.SET_BASKET:
      return {
        ...state,
        isloading: false,
        iserror: false,
        basket: action.payload,
      };

    // tetiklendıgınde sotreun nası güncellmesi gerektıgını belirticez .Bu sayede yaptıgımız APİ güncellemeleri arayüzede etki edicek sepet gerçek zamanlı olarak  güncellenicek.

    case Actiontypes.ADD_TO_BASKET:
      return { ...state, basket: state.basket.concat(action.payload) };

    //Dizide İD sini bildiğimiz elemanı 1 arttırma işlemı yapıcaz..

    case Actiontypes.UPDATE_ITEM:
      /* 
      state.basket.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item + 1 };
        } else {
          return item;
        }
      }); */

      // Daha kısa çözüm
      const newbasket = state.basket.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );

      // store u güncelle.
      return { ...state, basket: newbasket };

    //Aksiyon işlemı yapılır ve storeun nasıl güncellenmesi gerektiği işlemı yapılır.  (Onun için case yazalım)

    case Actiontypes.REMOVE_ITEM:
      //Silinecek elemanı diziden kaldırır.
      const updatedbasket = state.basket.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, basket: updatedbasket };

    default:
      return state;
  }
};

export default basketreducers;

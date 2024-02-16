import { Actiontypes } from "../actiontTypes";

const initialState = {
  isloading: false,
  iserror: false,
  products: [],
};

// burdaki, reducer ımız 2 adet parametre alır
//Birisi başlangıç değerimiz olan  state diğeri ise gelen aksiyonun yakalndıgı işlem.

const productreducers = (state = initialState, action) => {
  // buradakı işlem gelen aksiyonun tipine gööre gerçekleştirilir.(ör : ürünü kaldır , ürünü güncelle , ürünü sil)
  
  switch (action.type) {
    case Actiontypes.SET_LOADİNG:
      return { ...state, isloading: true };

    case Actiontypes.SET_ERROR:
      return { ...state, isloading: false, iserror: action.payload.message };



      case  Actiontypes.SET_PRODUCTS:

      return{...state , isloading:false, iserror:false,products : action.payload}
    default:
      return state;
  }
};

export default productreducers;

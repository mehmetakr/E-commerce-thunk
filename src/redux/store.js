import { combineReducers, createStore, applyMiddleware } from "redux";
import basketreducers from "./reducers/basketreducers";
import productreducers from "./reducers/productreducers";
import {thunk} from "redux-thunk";
// burda oluşturdugumuz reducerları tek bir çatı altında topladık ve adıne rootreducer verdik .Bu işlemı combinereducers ile gerçekleştirdik ve roostreducera atadık .

// Middleware sayesinde aksiyolarda APİ isteği atabiliyoruz artık .
const rootreducer = combineReducers({
  product: productreducers,
  basket: basketreducers,
});

// apply middleware fonksiyonu yardımıyla
// Redux thunk arayazılımı store 'a  tanıttık.

export default createStore(rootreducer, applyMiddleware(thunk));

//Tüm stateleri topladığım yer

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

//const rootReducer = combineReducer({
//    cart: cartReducer
//
//})

const rootReducer = combineReducers({

    cart:cartReducer
})

export default rootReducer
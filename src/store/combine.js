import { combineReducers } from "redux";
import languageReducer from "./reducer";
import FavReducer from "./cartReducer";

export default combineReducers({
    language:languageReducer,
    addToCart:FavReducer
})

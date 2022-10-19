import { combineReducers } from "redux";
import CountriesReducers from "./countriesReducer";

const rootReducer = combineReducers({
    countries: CountriesReducers,
})

export default rootReducer;
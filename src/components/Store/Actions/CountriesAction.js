import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRIES_BY_NAME,
  GET_COUNTRIES_BY_REGION,
  GET_COUNTRY_DETAIL,
  SET_LOADING,
} from "../type";

const countriesApi = "https://restcountries.com/v2";

export const getCountries = () => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  await axios
    .get(countriesApi + "/all")
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        flag: country.flag,
      }));
      dispatch({ type: SET_LOADING, payload: false });
      dispatch({ type: GET_COUNTRIES, payload: countries });
    })
    .catch((err) => console.log("get countries api error: ", err));
};

export const getCountryByName = (name) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });

  await axios
    .get(countriesApi + `/name/${name}`)
    .then((res) => {
      dispatch({ type: SET_LOADING, payload: false });

      dispatch({ type: GET_COUNTRY_DETAIL, payload: res.data[0] });
    })
    .catch((err) => console.log("get countries api error: ", err));
};

export const getCountriesByRegion = (region) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });

  await axios
    .get(countriesApi + `/region/${region}`)
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        flag: country.flag,
      }));
      dispatch({ type: SET_LOADING, payload: false });

      dispatch({ type: GET_COUNTRIES_BY_REGION, payload: countries });
    })
    .catch((err) => console.log("get countries api error: ", err));
};

// search

export const getCountriesByName = (name) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });

  await axios
    .get(countriesApi + "/name/" + `${name}`)
    .then((res) => {
      const countries = res.data.map((country) => ({
        name: country.name,
        capital: country.capital,
        population: new Intl.NumberFormat().format(country.population),
        region: country.region,
        flag: country.flag,
      }));
      dispatch({ type: SET_LOADING, payload: false });

      dispatch({ type: GET_COUNTRIES_BY_NAME, payload: countries });
    })
    .catch((err) => console.log("get countries api error: ", err));
};

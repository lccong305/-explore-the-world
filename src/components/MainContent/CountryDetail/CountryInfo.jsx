import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ScrollBar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom'
import './CountryInfoStyle.scss'

const CountryInfo = (props) => {

    const { country } = props
    console.log('country info', country)

    const getLanguages = (country) => {
        let result = ''
        country.languages.forEach(language => {
            if (result !== '') {
                result = result + '-' + language.name
            } else {
                result += language.name
            }
        })
        return result;
    }

    const getCountryNameByCode = async (code) => {
        const result = await axios.get(`https://restcountries.com/v2/alpha?codes=${code}`)
        return result.data
    }
    const [countriesBorder, setCountriesBorder] = useState([])
    useEffect(() => {
        if (country && country.borders)
            getCountryNameByCode(country.borders)
                .then(res => {
                    const countryName = res.map(country => country.name)
                    setCountriesBorder(countryName)
                })
                .catch((err) => console.error(err))
    }, [country])

    console.log(countriesBorder)



    return (
        
        <ScrollBar style={{maxHeight: '70vh'}}>
            <>
                <div className="country-info">
                    {
                        country && (
                            <>
                                <h3 className="country-info__name">Country info</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="country-info__title">Native name</td>
                                            <td>:</td>
                                            <td className="country-info__value">{country.nativeName}</td>
                                        </tr>
                                        <tr>
                                            <td className="country-info__title">Official</td>
                                            <td>:</td>
                                            <td className="country-info__value">
                                                {
                                                    country.altSpellings
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="country-info__title">Population</td>
                                            <td>:</td>
                                            <td className="country-info__value">{country.population}</td>
                                        </tr>
                                        <tr>
                                            <td className="country-info__title">Region</td>
                                            <td>:</td>
                                            <td className="country-info__value">{country.region}</td>
                                        </tr>
                                        <tr>
                                            <td className="country-info__title">Subregion</td>
                                            <td>:</td>
                                            <td className="country-info__value">{country.subregion}</td>
                                        </tr>
                                        <tr>
                                            <td className="country-info__title">Capital</td>
                                            <td>:</td>
                                            <td className="country-info__value">{country.capital}</td>
                                        </tr>
                                        <tr>
                                            <td className="country-info__title">Currencies</td>
                                            <td>:</td>
                                            <td className="country-info__value">
                                                {
                                                    country.currencies ? country.currencies[0].name : ''
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="country-info__title">Language</td>
                                            <td>:</td>
                                            <td className="country-info__value">
                                                {
                                                    getLanguages(country)
                                                }
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="country-info__title">Border Countries</td>
                                            <td>:</td>
                                            <td className="country-info__value-item">
                                                {
                                                    countriesBorder.length > 0 ? countriesBorder.map(item => (
                                                        <Link key={item} to={`../country/${item}`}><span >{item}</span></Link>
                                                    )) : ''
                                                }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        )
                    }
                </div>
            </>
        </ScrollBar>
    )
}

export default CountryInfo
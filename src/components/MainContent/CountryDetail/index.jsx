import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
import CountryInfo from './CountryInfo'
import { getCountryByName } from '../../Store/Actions/CountriesAction'

const CountryDetail = () => {
    const themContext = useContext(ThemeContext)
    const slug = useParams()
    console.log('slug', slug)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const country = useSelector(state => state.countries.country)
    console.log(country)

    useEffect(() => {
        dispatch(getCountryByName(slug.countryName))
    }, [slug.countryName, dispatch])

    const handleBack = () => {
        navigate(-1)
    }


    return (
        <>
            <Wrapper>
                <div 
                    className={`btn-back ${themContext.theme}`}
                    onClick={handleBack}
                >
                    Go back
                </div>
                <CountryContainer>
                    <div className="flag-country">
                        <img src={ country ? country.flag: ''} alt="" />
                    </div>
                    <CountryInfo country={country} />

                </CountryContainer>
            </Wrapper>
        </>
    )
}

export default CountryDetail

const Wrapper = styled.div`
    padding: 20px;

    .btn-back {
        display: block;
        width: 80px;
        height: 28px;
        line-height: 28px;
        padding: 2px 4px;
        border-radius: 4px;
        text-align: center;
        font-weight: 500;
        filter: brightness(0.9)
        transition: all 0.2s ease;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        &:hover {
            filter: brightness(1)
            font-weight: bold;
            cursor: default;
            user-select: none;
        }
    }
`

const CountryContainer = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 20px;

    .flag-country {
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin-bottom: 12px;
        box-shadow: var(--boxShadow)
    }

    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../ThemeContext/ThemeContext'
const Country = (props) => {

  const { country } = props
  const themeContext = useContext(ThemeContext)

  return (
    <>
    <Link to={`/country/${country.name}`}>
      <CountryCard className={themeContext.theme}>
        <div className="flag">
          <img src={country.flag} alt="" />
        </div>
        <CountryInfo>
          <h3>{country.name}</h3>
          <div>
            Popular
            <span> {country.population} </span>
          </div>
          <div>
            Region
            <span> {country.region}</span>
          </div>
          <div>
            Capital:
            <span> {country.capital} </span>
          </div>
        </CountryInfo>
      </CountryCard>
    </Link>
    </>
  )
}

export default Country


const CountryCard = styled.div`

  max-width: 420px;
  width: 100%;
  filter: brightness(1);
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 12px;
  user-select: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  .flag {
    height: 220px;

  }
  img {
    transition: transform 0.4s ease;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    filter: brightness(0.9);
  }
  &:hover img {
    transform: scale(1.1)
  }
`

const CountryInfo = styled.div`
  padding: 10px 16px;
  h3 {
    margin: 7px 0;
    font-size: 20px;
    font-weight: bold;
  }
  div {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin: 4px 0;

    span {
      font-weight: 400;
    }
  }
`
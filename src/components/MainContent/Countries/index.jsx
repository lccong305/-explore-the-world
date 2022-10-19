import React, { useEffect } from 'react'
import ScrollBar from 'react-perfect-scrollbar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Loading from '../../Loading/Loading'
import { getCountries, getCountriesByName, getCountriesByRegion } from '../../Store/Actions/CountriesAction'
import Country from './Country'

function Countries(props) {

  const dispatch = useDispatch()
  const slug = useParams()

  const countries = useSelector(state => state.countries.countries)
  const loading = useSelector(state => state.countries.loading)

  useEffect(() => {
    if (slug.regionName) {
      dispatch(getCountriesByRegion(slug.regionName))
    }
    else if (slug.name) {
      dispatch(getCountriesByName(slug.name))
    }
    else {
      dispatch(getCountries())
    }
  }, [dispatch, slug.regionName, slug.name])

  console.log('loading: ', loading)



  return (
    <>
      {
        loading ? ( <Loading /> ) :
          (
          <ScrollBar style={{ maxHeight: '70vh', overflow: 'hidden', transition: 'all 0.2s ease' }}>
            <CountriesContainer  >
              {
                countries.map((country, idx) => (
                  <Country key={idx} country={country} />
                ))
              }
            </CountriesContainer>
          </ScrollBar>
          )
      }
    </>
  )
}

export default Countries

const CountriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  padding: 4px 1px;

  @media screen and (max-width: 1024px){
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  @media screen and (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  @media screen and (max-width: 680px){
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`

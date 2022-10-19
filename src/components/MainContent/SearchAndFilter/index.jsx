import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import Search from './Search'

const SearchAndFilter = (props) => {
  return (
    <SearchAndFilterPanel>
      <Search />
      <Filter />
    </SearchAndFilterPanel>
  )
}

export default SearchAndFilter


const SearchAndFilterPanel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 20px;
`
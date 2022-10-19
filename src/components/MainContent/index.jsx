import React from 'react'
import Loading from '../Loading/Loading'
import Countries from './Countries'
import SearchAndFilter from './SearchAndFilter'

const MainContent = () => {
  return (
    <div>
      <SearchAndFilter />
      <Countries />
      {/* <Loading /> */}

    </div>
  )
}

export default MainContent
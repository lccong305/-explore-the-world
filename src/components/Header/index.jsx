import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeContext/ThemeContext'
import SwitchMode from './SwitchMode'


const Header = () => {

  const themeContext = useContext(ThemeContext)

  return (
    <>
    <HeaderPanel className={themeContext.theme}>
        <Link to={'/'}><span>Where in the world</span></Link>
        <button > <SwitchMode /> </button>
    </HeaderPanel>
    </>
  )
}

export default Header



const HeaderPanel = styled.div`
    height: 8vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    z-index: 10;
    span {
        font-size: 24px;
        font-weight: bold;
        text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.4);
    }
    button {
      background: transparent;
    }
`
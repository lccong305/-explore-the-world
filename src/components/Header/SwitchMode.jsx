import React, { useEffect, useRef, useState, useContext } from 'react'
import './switchmode.scss';
import  {BsFillMoonFill, BsSun}  from  'react-icons/bs';
import { ThemeContext } from '../ThemeContext/ThemeContext';


const SwitchMode = () => {

  const themeContext = useContext(ThemeContext)

  const refInputTheme = useRef()
  const refCircle = useRef()
  const refToggle = useRef()

  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    refInputTheme.current.checked = isDark
  }, [isDark])

  const handleChangeTheme = () => {
    refInputTheme.current.checked = !refInputTheme.current.checked
    setIsDark(refInputTheme.current.checked)
    themeContext.toggleTheme()
  }

  useEffect(() => {
    const changeBackgroundButton = () => {
      if(isDark) {
        refCircle.current.style.background = '#222'
        refToggle.current.style.background = '#7289da'

      } else {
        refCircle.current.style.background = '#fff'
        refToggle.current.style.background = '#7289da'
      }
    }
    changeBackgroundButton()
    document.addEventListener('resize', changeBackgroundButton)
    return() => {
      document.removeEventListener('resize', changeBackgroundButton)
    }
  }, [isDark])



 
 
  return (
    <>
    <div className="toggle-button" ref={refToggle} onClick={handleChangeTheme}>
      <input type="checkbox" className="input-change-theme" ref={refInputTheme} />
      <div className="icon">
        {
          isDark ?  <BsFillMoonFill /> :  <BsSun style={{color: 'yellow'}} />
        }
      </div>
        <div ref={refCircle} className="circle"></div>
    </div>
    </>
  )
}

export default SwitchMode
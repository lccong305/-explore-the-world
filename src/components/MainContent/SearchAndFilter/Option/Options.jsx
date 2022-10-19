import React, { useContext, useEffect, useRef } from 'react';
import { GiEarthAsiaOceania, GiWorld } from 'react-icons/gi';
import { FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa';
import styled from 'styled-components';
import Option from './Option';
import { ThemeContext } from '../../../ThemeContext/ThemeContext';

const RegionsList = [
    { icon: GiWorld, value: 'All' },
    { icon: FaGlobeAfrica, value: 'Africa' },
    { icon: FaGlobeAmericas, value: 'Americas' },
    { icon: FaGlobeAsia, value: 'Asia' },
    { icon: FaGlobeEurope, value: 'Europe' },
    { icon: GiEarthAsiaOceania, value: 'Oceania' },
];

function Options({ isShowOption }) {
    const themeContext = useContext(ThemeContext)
    const refOptions = useRef(null)

    useEffect(() => {
        const ShowOptions = () => {
            if (isShowOption) {
                refOptions.current.style.maxHeight = `${refOptions.current.scrollHeight}px`
                refOptions.current.style.transform = `scaleY(1)`
            } else {
                refOptions.current.style.maxHeight = '0'
                refOptions.current.style.transform = 'scaleY(0)'
            }
        }
        ShowOptions();
        document.addEventListener('resize', ShowOptions);
        return () => {
            document.removeEventListener('resize', ShowOptions);
        }
    }, [isShowOption])
    return (
        <OptionsPane className={themeContext.theme} ref={refOptions} >
            {
                RegionsList.map((region, idx) => (
                    <Option key={region.value} region={region} />
                ))
            }
        </OptionsPane>
    );
}

export default React.memo(Options);

const OptionsPane = styled.div`  
  transform-origin: top;
  max-width: 160px;
  width: 100%;
  margin-top: 2px;
  border-radius: 4px;
  position: absolute;  
  overflow: hidden;  
  z-index: 10;  
`

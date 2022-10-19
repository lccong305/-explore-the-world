import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import Options from './Option/Options';

const Filter = (props) => {
    const themeContext = useContext(ThemeContext)
    const refSelect = useRef(null)
    const [isShowOption, setIsShowOption] = useState(false)
    const [valueOption, setValueOption] = useState('All')
    const { regionName } = useParams()

    // console.log( regionName)

    useEffect(() => {
        if(regionName) setValueOption(regionName)
        else setValueOption('All')
    }, [regionName])

    

    const handleOption = (e) => {
        if (refSelect) {
            console.log('refSelect_current: ', refSelect.current)
            // console.log(refSelect.current.contains(e.target))
            setIsShowOption(refSelect.current.contains(e.target))
        }
    }

    useEffect(() => {
        if (isShowOption) {
            document.addEventListener('click', handleOption)
        }
        return () => {
            document.removeEventListener('click', handleOption)
        }
    }, [isShowOption])

    return (
        <FilterContainer>
            <h3>Filter by region</h3>
            <FilterItems>
                <div
                    className={`${themeContext.theme} filter-header`}
                    ref={refSelect}
                    onClick={handleOption}
                >
                    <span>{valueOption}</span>
                    <FaChevronDown />
                </div>
                <Options isShowOption={isShowOption} />
            </FilterItems>
        </FilterContainer>
    )
}

export default Filter

const FilterContainer = styled.div`
    max-width: 160px;
    width: 100%;
    margin-top: 20px;
    h3 {
        font-size: 18px;
        font-weight: bold;
    }
`;

const FilterItems = styled.div`
    position: relateive;

.filter-header {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin-top: 10px;
    padding: 5px 10px;
    user-select: none;
}
.filter-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
}

.filter-list {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px 10px; 
}


.filter-list li {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    margin-bottom: 5px;
    transition: translate 0.2s ease;
}

.filter-list li:hover {
    font-weight: bold;
}
.filter-list li:hover span{
    transform: translateX(10px)
}
`
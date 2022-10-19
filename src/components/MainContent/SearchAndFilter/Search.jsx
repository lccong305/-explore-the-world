import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Search = (props) => {
    const [inputValue, setInputValue] = useState('')

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (inputValue !== '') {
                navigate(`/search/${inputValue}`)
            } else {
                navigate('/')
            }
        }
    }

    const handleClickSearch = (e) => {

    }

    return (
        <SearchPanel>
            <h3>Search country</h3>
            <div className="input-group">
                <input
                    type="text"
                    placeholder="Search in here"
                    value={inputValue}
                    onChange={handleOnChange}
                    onKeyDown={handleKeyDown}
                />

                <Link to={ inputValue !== '' ? `/search/${inputValue}` : '/'}>
                    <div
                        className="icon-search"
                        onClick={handleClickSearch}
                    >
                        <BsSearch />
                    </div>
                </Link>
            </div>
        </SearchPanel>
    )
}

export default Search

const SearchPanel = styled.div`
    max-width: 320px;
    width: 100%;
    margin-top: 20px;
    
    h3 {
        font-size:18px;
        font-weight: 600;
        tex-shadow: var(--textShadow);
    }

    .input-group {
        display: flex;
        align-items: center;
        margin-top: 8px;
        box-shadow: var(--boxShadow);

    }

    input {
        width: 100%;
        border: 1px solid;
        border: none;
        outline: none;
        padding: 5px;
    }

    .icon-search {
        border: 1px solid;
        height: 35px;
        display: flex;
        align-items: center;
        width: 40px;
        justify-content: center;
        background: #eee;
        border: none;
        cursor: pointer;
    }
`
import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

function Option({ region }) {

  const navigate = useNavigate()

  const handleValueOption = () => {
    if (region.value !== 'All') {
      navigate(`/region/${region.value}`)
    } else {
      navigate('/')
    }
  }
  return (
    <OptionItem onClick={handleValueOption} >
      <region.icon />
      <div>{region.value}</div>
    </OptionItem>
  );
}

export default (Option);

const OptionItem = styled.div`
  display: flex;
  align-items: center;  
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;  
  padding: 4px 8px;  
  &:hover {
    background: var(--SelectOptionBackground);
    font-weight: bold;
  }
  div {
    margin-left: 4px;
  }
  
`
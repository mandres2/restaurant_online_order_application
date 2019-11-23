import React from "react";
import styled from "styled-components";
import {Title} from "../Styles/title";
import {Red} from "../Styles/colors";

const QuantityInputStyled = styled.input`
    font-size: 18px;
    width: 24px;
    text-align: center;
    border: none;
    outline: none;
`;

const IncrementContainer = styled(Title)`
    display: flex;
    height: 24px;
   `; 

const IncrementButton = styled.div`
    width: 23px;
    color: ${Red};
    font-size: 20px;
    text-align:center;
    cursor: pointer;
    line-height: 23px;
    margin: 0px 10px;
    border: 1px solid #f44336;
    border: 1px solid ${Red};
    ${({disabled}) => 
    disabled && 
    `opacity: 0.5;
        pointer-events: none;
        `}
    &:hover {
        background-color: #ffe3e3;
    }
`;

export function QuantityInput({quantity}){
    return ( 
    <IncrementContainer>
        <div>Quantity: </div>
        <IncrementButton onClick={() => {
           quantity.setValue(quantity.value - 1); 
        }} disabled={quantity.value=== 1}> - </IncrementButton>
        <QuantityInputStyled {...quantity}/>
        <IncrementButton onClick={() => {
            quantity.setValue(quantity.value + 1);
        }}> + </IncrementButton>
    </IncrementContainer>
     );
}

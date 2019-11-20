import React from 'react';
//import { rename } from 'fs';
import { render } from 'react-dom';
import styled from 'styled-components';

const SearchBoxItem = () => {
    return (
        <>
            <form>
                <SearchBox></SearchBox>
                <button>{SearchButton}</button>
            </form>
        </>
    );
};
const SearchBox = styled.input.attrs({
    type: 'text'
})`
    display: flex;
    border-radius: 45px;
    background-size: contain;
    padding: 0.7em;
    width: 180px;
`;
const SearchButton = styled.button`
    top: 1em;
    height: 1.5em;
    position: absolute;
    left: 1em;
    &:hover {
        color: black;
    }
`;

export default SearchBoxItem;

import React from 'react';
import styled from 'styled-components';
import SearchImg from '../Vector.png';

const SearchBoxItem = () => {
    return (
        <>
            <form>
                <SearchBox></SearchBox>
                <SearchButton>
                    <img src={SearchImg}></img>
                </SearchButton>
            </form>
        </>
    );
};
const SearchBox = styled.input.attrs({
    type: 'text'
})`
    border-radius: 45px;
    background-size: contain;
    padding: 0.7em;
    width: 180px;
`;
const SearchButton = styled.p`
    top: 2px;
    position: absolute;
    left: 10px;
    &:active {
        margin: 3px auto 8px;
    }
`;

export { SearchBoxItem };

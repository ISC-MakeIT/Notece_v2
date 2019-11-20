import React from 'react';
import SearchBox from './SearchBox';
import { render } from 'react-dom';
import styled from 'styled-components';

const TopNavItem = (
    contents1: string,
    contents2: string,
    contents3: string
) => {
    return (
        <>
            <a>{contents1}</a>
            <a>{contents2}</a>
            <a>{contents3}</a>
        </>
    );
};

const a = styled.a`
    display: flex;
    border-left: solid 1px black;
    position: relative;
    display: block;
    width: 150px;
    padding: 0.7em;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    color: dimgrey;
    background: darkgray;
    transition: 0.4s;
`;

export default TopNavItem;

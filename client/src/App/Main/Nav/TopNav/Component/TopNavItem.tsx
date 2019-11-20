import React from 'react';
import styled from 'styled-components';

const TopNavItem = (prop: any) => {
    return (
        <div>
            {prop.titles.map((title: string, index: string) => {
                return <TopNavLink href={prop.urls[index]}>{title}</TopNavLink>;
            })}
        </div>
    );
};

const TopNavLink = styled.a`
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
    &:hover {
        color: black;
    }
`;

export { TopNavItem };

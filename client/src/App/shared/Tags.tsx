import React, { FC } from 'react';
import styled from 'styled-components';

const Tags: FC = () => {
    return (
        <Li>
            <Main>
                <Center>Text</Center>
            </Main>
            <Side></Side>
        </Li>
    );
};

const Li = styled.li`
    display: flex;
    height: 100px;
    width: 400px;
    list-style: none;
`;

const Main = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    background: rgba(256, 0, 0, 0.2);
    width: 91%;
`;

const Side = styled.div`
    height: 100%;
    width: 9%;
    background: red;
`;

const Center = styled.p`
    display: block;
    width: 100%;
    text-align: center;
    z-index: 1;
`;

export default Tags;

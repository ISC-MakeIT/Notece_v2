import React, { FC } from 'react';
import styled from 'styled-components';

interface TagsProps {
    color: string;
    // text?: string;
}

const Tags: FC<TagsProps> = color => {
    return (
        <Li>
            <Main theme={{ color }}>
                <Center>text</Center>
            </Main>
            <Side theme={{ color }}></Side>
        </Li>
    );
};

const Li = styled.li`
    display: flex;
    height: 100px;
    width: 100%;
    list-style: none;
`;

const Main = styled.div`
    align-items: center;
    background: ${({ theme }) => theme.color};
    display: flex;
    justify-content: center;
    height: 100%;
    width: 91%;
`;

const Side = styled.div`
    height: 100%;
    width: 9%;
    background: ${({ theme }) => theme.color};
`;

const Center = styled.p`
    display: block;
    width: 100%;
    text-align: center;
`;

export default Tags;

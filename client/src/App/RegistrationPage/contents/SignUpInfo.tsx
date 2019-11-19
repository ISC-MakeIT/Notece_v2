import React, { FC } from 'react';
import {} from 'react-router';
import {} from 'react-router-dom';
import styled from 'styled-components';
import Tags from '../../shared/Tags';
import TagNav from '../../shared/TagNav';
import BaseNote from '../../shared/BaseNote';
import BaseBackground from '../../shared/BaseBackground';

const SignUpInfo: FC = () => {
    return (
        <BaseBackground>
            <TagNav>
                <Tags color={'red'} />
                <Tags color={'yellow'} />
                <Tags color={'blue'} />
                <Tags color={'orange'} />
            </TagNav>
            <BaseNote></BaseNote>
        </BaseBackground>
    );
};

export default SignUpInfo;

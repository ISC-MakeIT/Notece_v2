import React, { FC } from 'react';
import styled from 'styled-components';
import MenuBackground from '../../shared/MenuBackground';
import MenuContent from '../../shared/MenuContent';
import Content from '../../shared/Content';

const TimeLine: FC = () => {
    return (
        <MenuBackground>
            {/* SideNav */}
            <MenuContent>
                {/* TopNav */}
                <Content ></Content>
            </MenuContent>
        </MenuBackground>
    );
};

export default TimeLine;

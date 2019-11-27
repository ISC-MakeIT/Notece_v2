import React, { FC } from 'react';
import MenuBackground from '../../shared/MenuBackground';
import MenuContent from '../../shared/MenuContent';
import Content from '../../shared/Content';

const Settings: FC = () => {
    return (
        <MenuBackground>
            {/* SideNav */}
            <MenuContent>
                {/* TopNav */}
                <Content></Content>
            </MenuContent>
        </MenuBackground>
    );
};

export default Settings;

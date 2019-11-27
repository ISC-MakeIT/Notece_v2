import React, { FC } from 'react';
import styled from 'styled-components';
import MenuBackground from '../../shared/MenuBackground';
import MenuContent from '../../shared/MenuContent';
import userIcon from './img/Union.png';
import Content from '../../shared/Content';

const Profile: FC = () => {
    return (
        <MenuBackground>
            {/* SideNav */}
            <MenuContent>
                {/* TopNav */}
                <ProfileGrid>
                    <ProfileModal>
                        <Icon src={userIcon} />
                        <H1>名前</H1>
                        <Input />
                        <Comment></Comment>
                    </ProfileModal>
                </ProfileGrid>
            </MenuContent>
        </MenuBackground>
    );
};

const ProfileGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 75% 1fr;
    grid-row: 2/3;
    height: 100%;
    width: 100%;
`;

const ProfileModal = styled.div`
    background: #fff;
    border-radius: 24px;
    display: grid;
    grid-template-columns: 2fr 1fr 3fr;
    grid-template-rows: 4fr 1fr 6fr;
    grid-column: 2/3;
    margin: 5% 0;
`;

const Icon = styled.img`
    align-self: center;
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: center;
`;

const H1 = styled.h1`
    align-self: center;
    grid-row: 1/2;
    gird-column: 2/3;
    justify-self: center;
    font-size: 200%;
`;

const Input = styled.input`
    box-sizing: border-box;
    grid-row: 1/2;
    grid-column: 3/4;
    margin: 20% 0;
    margin-right: 5%;
`;

const Comment = styled.textarea`
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 24px;
    padding: 2%;
    font-size: 200%;
    grid-column: 1/4;
    grid-row: 3/4;
    margin: 5%;
    resize: none;
    outline: none;
`;
export default Profile;

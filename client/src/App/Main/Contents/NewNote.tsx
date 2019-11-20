import React, { FC } from 'react';
import styled from 'styled-components';
import MenuBackground from '../../shared/MenuBackground';
import MenuContent from '../../shared/MenuContent';
import backBtn from './img/buckButton.png';
import startBtn from './img/startButton.png';
import Content from '../../shared/Content';

const NewNote: FC = () => {
    return (
        <MenuBackground>
            {/* SideNav */}
            <MenuContent>
                {/* TopNav */}
                <NewNoteGrid>
                    <CreateNoteModal>
                        <H1>新しいノートを作成する</H1>
                        <Img_left src={backBtn} alt="前のページに戻る" />
                        <Img_right src={startBtn} alt="前のページに戻る" />
                        <H2>
                            ※今後この画面を表示しない
                            {/* <input type="checkbox" /> */}
                        </H2>
                    </CreateNoteModal>
                </NewNoteGrid>
            </MenuContent>
        </MenuBackground>
    );
};

const NewNoteGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 50% 1fr;
    grid-row: 2/3;
    height: 100%;
    width: 100%;
`;

const CreateNoteModal = styled.div`
    background: #fff;
    border-radius: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    grid-column: 2/3;
    margin: 5% 0;
`;

const H1 = styled.h1`
    align-self: center;
    font-size: 200%;
    grid-row: 1/2;
    grid-column: 1/3;
    justify-self: center;
    text-align: center;
`;

const H2 = styled.h2`
    align-self: center;
    font-size: 200%;
    grid-row: 3/4;
    grid-column: 1/3;
    justify-self: center;
    text-align: center;
`;

const Img_left = styled.img`
    align-self: center;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0px 1px 10px #ccc;
    grid-row: 2/3;
    grid-column: 1/2;
    justify-self: center;
    width: 60%;
`;

const Img_right = styled.img`
    align-self: center;
    border-radius: 50%;
    box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: 0px 1px 10px #99f84b;
    grid-row: 2/3;
    grid-column: 2/3;
    justify-self: center;
    width: 60%;
`;

export default NewNote;

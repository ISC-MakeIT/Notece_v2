import React, { FC, useState } from 'react';
import { withRouter, useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import topic from '../img/topic.png';
import Tags from '../../shared/Tags';
import TagNav from '../../shared/TagNav';
import BaseNote from '../../shared/BaseNote';
import BaseBackground from '../../shared/BaseBackground';

const SignUpPass: FC = () => {
    // const [text, setText] = useState();
    // let history = useHistory();
    // const movePage = () => {
    //     history.push({
    //         pathname: '/sign_up_pass',
    //         state: text
    //     });
    // };
    const location = useLocation();
    console.log(location.state);

    return (
        <BaseBackground>
            <TagNav>
                <Tags color={'red'} />
                <Tags color={'yellow'} />
                <Tags color={'blue'} />
                <Tags color={'orange'} />
            </TagNav>
            <BaseNote>
                {/* <Topic src={topic} alt="メールアドレス" />
                <H1>1.メールアドレスの登録</H1>
                <P>登録する メールアドレスを入力</P>
                <P> してください。</P>
                <INPUT type="email" />
                <Small> IDに使用します</Small>
                <button onClick={movePage}>送信</button> */}
            </BaseNote>
        </BaseBackground>
    );
};

const Topic = styled.img`
    display: block;
    width: 55%;
    margin: 3% auto;
`;

const H1 = styled.h1`
    align-item: center;
    display: block;
    font-size: 60px;
    text-align: center;
    margin: 1% auto;
`;

const P = styled.p`
    align-item: center;
    display: block;
    font-size: 60px;
    text-align: center;
    margin: 1% auto;
`;

const INPUT = styled.input`
    align-item: center;
    border: none;
    box-shadow: 0px 9px 3px -3px #ccc;
    border-bottom: 2px solid #000;
    display: block;
    font-size: 60px;
    margin: 1% auto;
    text-align: center;
    width: 55%;
`;

const Small = styled.p`
    width: 55%;
    display: block;
    font-size: 30px;
    text-align: right;
    margin: 1% auto;
`;
export default SignUpPass;

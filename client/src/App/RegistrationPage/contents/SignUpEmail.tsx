import React, { FC } from 'react';
import {} from 'react-router';
import {} from 'react-router-dom';
import styled from 'styled-components';

const SignUpEmail: FC = () => {
    return (
        <Center>
            <h1>メールアドレス登録</h1>
            <h2>1.メールアドレス</h2>
            <p>登録するメールアドレスを入力してください</p>
            <form action="/sign_up_pass">
                <input type="email" id="" />
                <button>パスワード設定へ！</button>
            </form>
        </Center>
    );
};

const Center = styled.section`
    width: 100%;
    height: 100%;
    text-align: center;
`;

export default SignUpEmail;

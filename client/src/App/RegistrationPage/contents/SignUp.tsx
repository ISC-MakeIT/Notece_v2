import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SingUp: FC = () => {
    return (
        <Center>
            <h1>新規作成</h1>
            <Link to={'/sign_up_info'}>ここから登録</Link>
        </Center>
    );
};

const Center = styled.section`
    width: 100%;
    height: 100%;
    text-align: center;
`;

export default SingUp;

import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const SingUp: FC = () => {
    return (
        <div>
            <h1>新規作成</h1>
            <Link to={'/sign_up_email'}>ここから登録</Link>
        </div>
    );
};

export default SingUp;

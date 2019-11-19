import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './contents/SignUp';
import SignUpInfo from './contents/SignUpInfo';

const RegistrationPage: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/sign_up" component={SignUp} />
                <Route path="/sign_up_info" component={SignUpInfo} />
                <Route path="/sign_in" />
            </Switch>
        </BrowserRouter>
    );
};

export default RegistrationPage;

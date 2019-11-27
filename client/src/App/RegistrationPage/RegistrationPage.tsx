import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './contents/SignUp';
import SignUpEmail from './contents/SignUpEmail';
import SignUpPass from './contents/SignUpPass';

export const RegistrationPage: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/registration/sign_up" component={SignUp} />
                <Route
                    path="/registration/sign_up_email"
                    component={SignUpEmail}
                />
                <Route
                    path="/registration/sign_up_pass"
                    component={SignUpPass}
                />
                <Route path="/registration/sign_in" />
            </Switch>
        </BrowserRouter>
    );
};

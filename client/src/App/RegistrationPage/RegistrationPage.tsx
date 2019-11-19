import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const RegistrationPage: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/sign_up" />
                <Route path="/sign_up_email" />
                <Route path="/sign_up_pass" />
                <Route path="/sign_in" />
            </Switch>
        </BrowserRouter>
    );
};

export default RegistrationPage;

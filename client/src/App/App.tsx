import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { RegistrationPage } from './RegistrationPage/RegistrationPage';
import { Main } from './Main/Main';
import { Canvas } from './Canvas/Canvas';

export const App: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/registration" component={RegistrationPage} />
                <Route path="/top" component={Main} />
                <Route path="/canvas" component={Canvas} />
            </Switch>
        </BrowserRouter>
    );
};

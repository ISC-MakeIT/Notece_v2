import React, { FC } from 'react';

import { Grid } from '@material-ui/core';

import { TimeLine } from './TimeLine/TimeLine';

export const Main: FC = () => {
    return (
        <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
                <TimeLine />
            </Grid>
        </Grid>
    );
};

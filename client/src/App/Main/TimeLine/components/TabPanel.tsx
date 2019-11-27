import React, { FC, ReactNode } from 'react';

import { Typography, Box, makeStyles } from '@material-ui/core';

export const TabPanel: FC<Props> = props => {
    const classes = useStyles();
    const { children, value, index } = props;

    return (
        <Typography component="div" role="tabpanel" hidden={value !== index}>
            <Box className={classes.root} justifyContent="space-around">
                {children}
            </Box>
        </Typography>
    );
};

const useStyles = makeStyles({
    root: {
        display: 'flex'
    }
});

type Props = {
    children: ReactNode;
    value: number;
    index: number;
};

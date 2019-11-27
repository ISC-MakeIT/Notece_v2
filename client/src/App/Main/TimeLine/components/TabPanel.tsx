import React, { FC, ReactNode } from 'react';

import { Typography, Box } from '@material-ui/core';

type TabPanelProps = {
    children: ReactNode;
    value: number;
    index: number;
};

export const TabPanel: FC<TabPanelProps> = props => {
    const { children, value, index } = props;

    return (
        <Typography component="div" role="tabpanel" hidden={value !== index}>
            <Box>{children}</Box>
        </Typography>
    );
};

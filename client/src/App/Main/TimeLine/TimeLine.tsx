import React, { ChangeEvent } from 'react';
import {
    AppBar,
    Tabs,
    Tab,
    Typography,
    Box,
    makeStyles
} from '@material-ui/core';

import { Group } from './components/Group';
import { Channell } from './components/Channell';
import { Comment } from './components/Comment';

function TabPanel(props: any) {
    const { children, value, index } = props;

    return (
        <Typography component="div" role="tabpanel" hidden={value !== index}>
            <Box>{children}</Box>
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));

export const TimeLine = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={(e: ChangeEvent<{}>, value: number) => {
                        setValue(value);
                    }}
                >
                    <Tab label="Group" />
                    <Tab label="Channell" />
                    <Tab label="Comment" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Group />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Channell />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Comment />
            </TabPanel>
        </div>
    );
};

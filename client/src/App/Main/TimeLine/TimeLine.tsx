import React, { ChangeEvent, useState } from 'react';
import { AppBar, Tabs, Tab, makeStyles } from '@material-ui/core';

import { TimeLineItem } from './components/TimeLineItem';
import { TabPanel } from './components/TabPanel';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));

export const TimeLine = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [groupList, setGroupList] = useState();
    const [channellList, setChannellList] = useState();
    const [commentList, setCommentList] = useState();

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
                Group
            </TabPanel>
            <TabPanel value={value} index={1}>
                Channell
            </TabPanel>
            <TabPanel value={value} index={2}>
                Comment
            </TabPanel>
        </div>
    );
};

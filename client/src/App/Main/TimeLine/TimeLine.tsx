import React, { ChangeEvent, useState } from 'react';
import { makeStyles } from '@material-ui/core';

import { TimeLineBar } from './components/TimeLineBar';
import { TabPanel } from './components/TabPanel';
import { TimeLineItem } from './components/TimeLineItem';
import { getJSON, postJSON } from '../../shared/api_client';

export const TimeLine = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [viewNumber, setViewNumber] = useState(8);
    const [groupsList, setGroupsList] = useState([
        'JS',
        'Python',
        'Java',
        'Flutter'
    ]); // getJSONでノートの情報を取得してrenderする
    const [channellsList, setChannellsList] = useState(['C', 'C++', 'Zen']);

    return (
        <div className={classes.root}>
            <TimeLineBar value={value} valueSetter={setValue} />
            <TabPanel value={value} index={0}>
                {groupsList.map(value => {
                    return (
                        <TimeLineItem
                            title={value}
                            posted_at={new Date().toLocaleString()}
                        />
                    );
                })}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {channellsList.map((value: string, index: number) => {
                    if (index < viewNumber) {
                        return (
                            <TimeLineItem
                                title={value}
                                posted_at={new Date().toLocaleString()}
                            />
                        );
                    }
                })}
            </TabPanel>
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    }
}));

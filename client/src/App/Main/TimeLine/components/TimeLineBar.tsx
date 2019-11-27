import React, { FC, ChangeEvent } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';

export const TimeLineBar: FC<Props> = props => {
    const { value, valueSetter } = props;

    return (
        <AppBar position="static">
            <Tabs
                value={value}
                onChange={(e: ChangeEvent<{}>, value: number) => {
                    valueSetter(value);
                    console.log('mounted');
                }}
            >
                <Tab label="Group" />
                <Tab label="Channell" />
                <Tab label="Comment" />
            </Tabs>
        </AppBar>
    );
};

type Props = {
    value: number;
    valueSetter: Function;
};

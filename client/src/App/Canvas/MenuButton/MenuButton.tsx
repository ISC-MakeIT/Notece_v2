import React, { FC } from 'react';
import { Paper, Divider, withStyles, makeStyles } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import {
    Create,
    FiberManualRecordOutlined,
    StopOutlined,
    ChangeHistoryOutlined,
    GetApp,
    Publish
} from '@material-ui/icons';

const StyledToggleButtonGroup = withStyles(theme => ({
    grouped: {
        margin: theme.spacing(0.5),
        border: 'none',
        padding: theme.spacing(0, 1),
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius
        }
    }
}))(ToggleButtonGroup);

export const MenuButton: FC<Props> = props => {
    const { drawFunc, rectFunc, circleFunc, textFunc, loadFileFunc } = props;
    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);

    const handleFormat = (event: any, newFormats: any) => {
        setFormats(newFormats);
    };

    const handleAlignment = (event: any, newAlignment: any) => {
        setAlignment(newAlignment);
    };

    const classes = useStyles();

    return (
        <Paper>
            <StyledToggleButtonGroup
                size="small"
                value={formats}
                onChange={handleFormat}
                arial-label="text formatting"
            >
                <ToggleButton value="bold" aria-label="bold" onClick={drawFunc}>
                    <Create />
                </ToggleButton>
                <ToggleButton
                    value="italic"
                    aria-label="italic"
                    onClick={circleFunc}
                >
                    <FiberManualRecordOutlined />
                </ToggleButton>
                <ToggleButton
                    value="underlined"
                    aria-label="underlined"
                    // onClick={circleFunc}
                >
                    <ChangeHistoryOutlined />
                </ToggleButton>
                <ToggleButton
                    value="color"
                    aria-label="color"
                    disabled
                    onClick={rectFunc}
                >
                    <StopOutlined />
                </ToggleButton>
                <Divider orientation="vertical" className={classes.divider} />
                <ToggleButton>
                    <GetApp />
                </ToggleButton>
                <ToggleButton>
                    <Publish />
                </ToggleButton>
            </StyledToggleButtonGroup>
        </Paper>
    );
};

type Props = {
    drawFunc: any;
    rectFunc: any;
    circleFunc: any;
    textFunc: any;
    loadFileFunc: any;
};

const useStyles = makeStyles(theme => ({
    paper: {
        display: 'flex',
        border: `1px solid ${theme.palette.divider}`,
        flexWrap: 'wrap'
    },
    divider: {
        alignSelf: 'stretch',
        height: 'auto',
        margin: theme.spacing(1, 0.5)
    }
}));

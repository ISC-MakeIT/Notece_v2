import React, { FC } from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    IconButton,
    makeStyles,
    Icon
} from '@material-ui/core';
import { MoreHoriz, AcUnit } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
        minWidth: 345,
        maxHeight: 345,
        minHeight: 345
    },
    media: {
        paddingTop: '56.25%' // 16:9
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

type Props = {
    title: string;
    posted_at: string;
};

export const TimeLineItem: FC<Props> = props => {
    const { title, posted_at } = props;
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Icon>
                        <AcUnit />
                    </Icon>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHoriz />
                    </IconButton>
                }
                title={title}
                subheader={posted_at}
            />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
            />
            <CardContent>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                ></Typography>
            </CardContent>
        </Card>
    );
};

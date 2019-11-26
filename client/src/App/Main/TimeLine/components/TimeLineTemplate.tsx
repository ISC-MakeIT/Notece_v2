import React, { FC, useState } from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    Avatar,
    IconButton,
    makeStyles
} from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    avatar: {
        backgroundColor: red[500]
    }
}));

export const TimeLineTemplate: FC = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHoriz />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                </Typography>
            </CardContent>
        </Card>
    );
};

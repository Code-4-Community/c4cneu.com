import React from 'react';

import {
    CardContent,
    Typography,
    CardMedia,
    Card,
    makeStyles
}
    from '@material-ui/core';

const useStyles = makeStyles({
    'project-card': {
        margin: '5%'
    },
    'project-img': {}
});

interface CardProps {
    readonly title: string;
    readonly paragraph: string;
    readonly path: string;
    readonly abbr: string;
    readonly learnMore: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, paragraph, path, abbr, learnMore }) => {
    const classes = useStyles();
    return (
        <Card className={classes['project-card']}>
            <a href={learnMore}>
                <CardMedia
                    component="img"
                    className={classes['project-img']}
                    image={path}
                    alt={path}
                    title={abbr}
                />
            </a>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {paragraph}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;

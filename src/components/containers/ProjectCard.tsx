import React from 'react';

import {
    CardContent,
    Button,
    Typography,
    CardMedia,
    Card,
    CardActions,
    makeStyles
}
    from '@material-ui/core';

const useStyles = makeStyles({
    'project-card': {},
    'project-img': {}
});

interface CardProps {
    readonly title: string;
    readonly paragraph: string;
    readonly path: string;
    readonly abbr: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, paragraph, path, abbr }) => {
    const classes = useStyles();
    return (
        <Card className={classes['project-card']}>
            <CardMedia
                component="img"
                className={classes['project-img']}
                image={path}
                alt={path}
                title={abbr}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {paragraph}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;

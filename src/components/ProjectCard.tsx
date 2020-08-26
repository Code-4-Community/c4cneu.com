import React from 'react';

import {
    CardContent,
    Typography,
    CardMedia,
    Card,
    makeStyles,
    Box,
    Grid
}
    from '@material-ui/core';

const useStyles = makeStyles({
    'project-card': {
        margin: '5%',
        transition: 'transform .2s',
        '&:hover': {
            transform: 'scale(1.01)',
        },
        height: 'max(fit-content, 500px)'
    },
    'project-img': {
        width: 'calc(100% - 2em)',
        padding: '1em'
    },
    'app-description': {
        'font-weight': '300'
    }
});

interface CardProps {
    readonly title: string;
    readonly paragraph: string;
    readonly appDesc: string;
    readonly path: string;
    readonly abbr: string;
    readonly learnMore: string;
}

const ProjectCard: React.FC<CardProps> = ({ title, paragraph, appDesc, path, abbr, learnMore }) => {
    const classes = useStyles();
    return (
        <Grid item md={6}>
            <Card className={classes['project-card']}>
                <Box height={'max(175, 100%)'}>
                    <a href={learnMore}>
                        <CardMedia
                            component="img"
                            className={classes['project-img']}
                            image={path}
                            alt={path}
                            title={abbr}
                        />
                    </a>
                </Box>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>

                    <Typography variant="h6" className={classes['app-description']} gutterBottom color="textSecondary" component="p">
                        {appDesc}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        {paragraph}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProjectCard;

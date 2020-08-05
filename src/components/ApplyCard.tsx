import React from 'react'
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme
} from '@material-ui/core/styles'
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
  Fade
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  card: {
    padding: 0,
    margin: 'auto',
    background: 'inherit'
  },
  content: {
    paddingLeft: 0,
    paddingRight: 0
  },
  heading: {
    fontWeight: 'bold'
  },
  disableLinkColor: {
    color: 'inherit',
    textDecoration: 'inherit'
  }
})
// CSS for underline animation
//https://css-tricks.com/4-ways-to-animate-the-color-of-a-text-link-on-hover/#technique-4-using-transform
const StyledButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
      borderBottom: '1px solid ' + theme.palette.text.secondary,

      borderRadius: 0,
      '&:hover': {
        backgroundColor: 'inherit'
      }
    },
    label: {
      overflow: 'hidden',
      '& > span': {
        position: 'absolute',

        overflow: 'hidden',

        transform: 'translateX(-100%)',
        transition: 'transform 275ms ease',
        borderBottom: '1px solid ' + theme.palette.text.primary,
        paddingTop: 1
      },

      '& > span:before': {
        display: 'inline-block',
        content: 'attr(data-content)',

        color: theme.palette.text.secondary,
        opacity: 0,

        transform: 'translateX(100%)'
      },

      '&:hover > span': {
        transform: 'translateX(0)'
      },
      '&:hover > span::before': {
        transform: 'translateX(0)'
      }
    },
    text: {
      fontWeight: 'normal',
      textTransform: 'none'
    }
  })
)(Button)

interface RoleProps {
  title: string
  children: React.ReactNode
  to: string
  enterTime: number
}

const ApplyCard: React.FC<RoleProps> = ({ title, children, to, enterTime }) => {
  const classes = useStyles()
  return (
    <Grid item sm={4}>
      <Fade in timeout={enterTime}>
        <Card className={classes.card} elevation={0}>
          <CardContent className={classes.content}>
            <Typography className={classes.heading} variant='h5' gutterBottom>
              {title}
            </Typography>

            <Typography variant='body1'>{children}</Typography>
          </CardContent>
          <CardActions className={classes.content}>
            <Link className={classes.disableLinkColor} to={to}>
              <StyledButton size='large' disableRipple>
                <span aria-hidden='true' data-content='Learn More'></span>Learn
                More
              </StyledButton>
            </Link>
          </CardActions>
        </Card>
      </Fade>
    </Grid>
  )
}

export default ApplyCard

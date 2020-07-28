import React from 'react'
import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles'
import { Box, Tabs, Tab, Typography, Button } from '@material-ui/core'

import CodeIcon from '@material-ui/icons/Code'
import BrushIcon from '@material-ui/icons/Brush'

const StyledTabs = withStyles({
  root: {
    alignItems: 'left'
  },
  indicator: {
    backgroundColor: '#828282',
    right: 165,
    width: 10
  }
})(Tabs)

const StyledTab = withStyles(theme =>
  createStyles({
    root: {
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(12),

      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1
      },
      padding: 0
    },
    wrapper: {
      // display: 'inline',
      // paddingLeft: '1rem',
      // paddingRight: '1rem'
    }
  })
)(Tab)

// From MUI docs on vertical tabs

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel (props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pl={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps (index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    height: '100%',
    minHeight: '80vh',
    paddingTop: 0
  },
  tabs: {
    minWidth: 'fit-content',
  },
  tab: {

  },
  list: {
    marginTop: 5
  }
}))

const VerticalTabs: React.FC = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (
    event: React.ChangeEvent<unknown>,
    newValue: number
  ) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <StyledTabs
        orientation='vertical'
        variant='scrollable'
        value={value}
        onChange={handleChange}
        aria-label='Vertical tabs example'
        className={classes.tabs}
        indicatorColor='primary'
      >
        <StyledTab label="Developer" icon={<CodeIcon />} {...a11yProps(0)} />
        <StyledTab label="Designer" icon={<BrushIcon />} {...a11yProps(1)} />
        <StyledTab label='Role 3' {...a11yProps(2)} />
        <StyledTab label='Role 4' {...a11yProps(3)} />
        <StyledTab className={classes.tab} label='Role 5' {...a11yProps(4)} />
        <StyledTab label='Role 6' {...a11yProps(5)} />
        <StyledTab label='Role 7' {...a11yProps(6)} />
      </StyledTabs>
      <TabPanel value={value} index={0}>
        <Typography variant='h4'>Developer</Typography>
        <Typography gutterBottom variant='h6' color='textSecondary'>
          Software Engineer / Full Stack Web Developer
        </Typography>
        <Typography gutterBottom variant='body1'>
          Talk about being a software dev at C4C. We need good developers. Here
          is text that describes what being a developer is like. Short
          sentences, big picture stuff, very persuasive. A little bit more text
          because we need it to look nice and fit on this page.
        </Typography>
        <Typography gutterBottom variant='body1'>
          Talk about being a software dev at C4C. We need good developers. Here
          is text that describes what being a developer is like. Short
          sentences, big picture stuff, very persuasive. A little bit more text
          because we need it to look nice and fit on this page.
        </Typography>
        <br />
        <Typography variant='h6'>What we're looking for</Typography>
        <ul className={classes.list}>
          <li>This thing that you should be able to do</li>
          <li>And this other thing thats fun and cool</li>
          <li>Another not too intimidating requirement</li>
          <li>A good team player</li>
          <li>Someone who cares about doing good for the community</li>
        </ul>

        <Box mb={5} mt={3}>
          <Button variant='contained' size='large'>
            Apply to be a developer
          </Button>
        </Box>

        <Typography gutterBottom variant='h6'>
          More Information
        </Typography>
        <Typography gutterBottom variant='body1'>
          Talk about being a software dev at C4C. This is where you write more
          about extra information, this could be about our development teams,
          our tech stack, our design process, etc. Just a place to dump
          information about the role that doesnt fit nicely on a little card.
          Ideally this whole thing fits on a standard desktop screen without
          scrolling but it doesnt really matter.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  )
}

export default VerticalTabs

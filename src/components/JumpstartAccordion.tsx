import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

interface JumpstartAccordionProps {
  readonly sections: Array<{
    readonly title: string;

    readonly body: string | JSX.Element;
  }>;
}

const useStyles = makeStyles({
  title: {
    fontWeight: 500,
  },
});

const JumpstartAccordion: React.FC<JumpstartAccordionProps> = (props) => {
  const classes = useStyles();
  return (
    <>
      {props.sections.map((section, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="body1"
              className={classes.title}
              color="primary"
            >
              {section.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{section.body}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default JumpstartAccordion;

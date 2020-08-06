import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface JumpstartAccordionProps {
  readonly sections: Array<{
    readonly body: string;
    readonly title: string;
  }>;
}
const JumpstartAccordion: React.FC<JumpstartAccordionProps> = (props) => {
  return (
    <>
      {props.sections.map((section, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{section.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{section.body}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default JumpstartAccordion;

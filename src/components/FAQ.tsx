import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Paper, Typography, Link } from '@material-ui/core';
import Hero from './Hero';
import { ReactComponent as SVG } from '../svg/faq_Ryan.svg';
import JumpstartAccordion from './JumpstartAccordion';
/*
Template for future page components.
Use MUI's CSS-in-JS makeStyles() as shown below for more complex CSS/
Otherwise, use <Box> components where possible for inline styling.
Every page must have a Helmet tag for SEO purposes.
*/

const useStyles = makeStyles({});

const faq = [
  {
    title: 'How does the application process work?',
    body: (
      <>
        Visit the ‘Apply’ page on our website c4cneu.com We’ll reach out to
        schedule a brief interview with 1-2 members of our team.
        <br />
        Note: C4C does not believe coding challenges belong in our interview
        process, and we never factor school year into our decisions.
      </>
    ),
  },
  {
    title: 'Who do we work with?',
    body:
      'We work with nonprofits in the Greater Boston area that are working to improve the community we live in. We look for organizations that are doing important work, that have a need for a software solution, but lack the resources to pursue typical development channels.',
  },
  {
    title: 'How much of a time commitment is C4C?',
    body: (
      <>
        8-10 hours a week comprised of:
        <Box mt={-2}>
          <ol>
            <li> A weekly, one hour meeting with your team</li>
            <li>
              Individual product work which is determined weekly during the team
              meeting. We like to assign work weekly because it gives our team
              members flexibility in their work, (e.g. if you know you’ll be
              super busy one week you can always take on less work and vice
              versa)
            </li>
          </ol>
        </Box>
      </>
    ),
  },
  {
    title: 'How often does C4C meet?',
    body: 'Product team members meet once a week.',
  },
  {
    title: 'What is the culture like at C4C?',
    body: 'Entrepreneurial, open environment, inclusive and very supportive',
  },
  {
    title: 'What is the product team structure?',
    body:
      'Teams are structured around a single project that everyone works on together. Each team is made up of: a project lead, 1-2 designers, and several full stack developers.',
  },
  {
    title: 'How many people are in C4C? How many people are on a product team?',
    body:
      'C4C is roughly 20 members strong and each product team is roughly 8 people.',
  },
  {
    title: 'What have you worked on in the past?',
    body: (
      <>
        Check out our past projects on our{' '}
        <Link href="https://github.com/Code-4-Community">Github</Link>!
      </>
    ),
  },
];

const Template: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Helmet>
        <title>FAQ</title>
        <meta
          name="description"
          content="Frequently asked questions about Code4Community."
        />
      </Helmet>

      <Hero
        title="FAQ"
        subtitle="Everything you need to know about our production teams."
        SvgNode={SVG}
      />
      <Container maxWidth="sm">
        <Box pb="50vh">
          <JumpstartAccordion sections={faq} />
        </Box>
      </Container>
    </Container>
  );
};

export default Template;

import React from 'react';

import { Collapse } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const BannerAlert: React.FC = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <Collapse in={open}>
      <Alert
        severity="info"
        onClose={() => {
          setOpen(false);
        }}
      >
        Due to the COVID-19 pandemic, all of our events in the Fall will be held
        virtually and recorded.
      </Alert>
    </Collapse>
  );
};

export default BannerAlert;

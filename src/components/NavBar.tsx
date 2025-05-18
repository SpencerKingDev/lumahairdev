import React from "react";
import { AppBar, Toolbar, Typography, Box, Fab, Fade } from "@mui/material";
import { useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

interface Props {
  children?: React.ReactElement<unknown>;
}

function ScrollTop(props: Props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function NavBar(props: Props) {
  return (
    <React.Fragment>
      <AppBar sx={{ backgroundColor: 'background.paper' }}>
        <Toolbar>
          <Typography variant="h6" component="div" color="primary">
            Luma Hair Studio
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
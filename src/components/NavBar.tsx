import React from "react";
import { AppBar, Toolbar, Typography, Box, Fab, Fade, Container, IconButton, Menu, MenuItem, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

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

const pages = ['Home', 'About', 'Services', 'Contact'];

export default function NavBar(props: Props) {

  const navigate = useNavigate();

  const handlePageChange = (page: string) => {
    switch (page) {
      case 'About':
        handleCloseNavMenu();
        navigate('/about');
        break;
      case 'Services':
        handleCloseNavMenu();
        navigate('/services');
        break;
      case 'Contact':
        handleCloseNavMenu();
        navigate('/contact');
        break;
      default:
        handleCloseNavMenu();
        navigate('/');
    }
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ backgroundColor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
              }}
            >
              Luma Hair Studio
            </Typography> */}

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handlePageChange(page)}>
                    <Typography sx={{ textAlign: 'center', color: 'primary.main' }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
              }}
            >
              Luma Hair Studio
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  sx={{ my: 2, color: 'primary.main', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
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
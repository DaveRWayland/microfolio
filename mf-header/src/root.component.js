import React, { useState } from 'react';
import { AppBar, Badge, Box, InputBase, Toolbar, Typography, IconButton, Stack, Styles } from '@mui/material';
import { MoreVert, Notifications, AccountCircle, ExtensionRounded, ColorLens } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Navbar from './components/Navbar';
import './styles/style.css';
import ProgressBar from './components/ProgressBar';
import { yellow } from '@mui/material/colors';

export default function Root(props) {
  const menuID = 'mf-navbar-menu';
  const mobileMenuID = 'mf-navbar-menu-mobile';

  const [anchor, setAnchor] = useState(null);
  const [mobileAnchor, setMobileAnchor] = useState(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ background: yellow[500], color: '#000' }}>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='open drawer' sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h4'
            noWrap
            component='div'
            sx={{ display: { xs: 'none', sm: 'block' }, fontFamily: '"Fredoka", sans-serif;' }}>
            <ExtensionRounded />
            Biometricos
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size='large' aria-label='show new notifications' color='inherit'>
              <Badge badgeContent={1} color='error'>
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-label='account of current user'
              aria-controls={menuID}
              aria-haspopup='true'
              onClick={(event) => setAnchor(event.currentTarget)}
              color='inherit'>
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls={mobileMenuID}
              aria-haspopup='true'
              onClick={(event) => setMobileAnchor(event.currentTarget)}
              color='inherit'>
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
        <Stack spacing={2} direction={'row'} alignItems={'center'} justifyContent={'flex-end'} paddingX={3} mb={1}>
          <ProgressBar />
        </Stack>
      </AppBar>
      <Navbar {...{ anchor, setAnchor, mobileAnchor, setMobileAnchor, menuID, mobileMenuID }} />
    </Box>
  );
}

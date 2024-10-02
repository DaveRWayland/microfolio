import React from 'react';
import { Badge, Menu, MenuItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function Navbar({ anchor, setAnchor, mobileAnchor, setMobileAnchor, menuID, mobileMenuID }) {
  const handleMobileMenuClose = () => {
    setMobileAnchor(null);
  };

  const handleMenuClose = () => {
    setAnchor(null);
    handleMobileMenuClose();
  };

  const isMenuOpen = Boolean(anchor);
  const isMobileMenuOpen = Boolean(mobileAnchor);
  const renderMenu = (
    <Menu
      anchor={anchor}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuID}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Mi Cuenta</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchor={mobileAnchor}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuID}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton size='large' aria-label='show new notifications' color='inherit'>
          <Badge badgeContent={1} color='error'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notificaciónes</p>
      </MenuItem>
      <MenuItem onClick={(event) => setAnchor(event.currentTarget)}>
        <IconButton
          size='large'
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'>
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

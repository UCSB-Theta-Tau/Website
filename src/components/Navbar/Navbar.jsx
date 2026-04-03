import React, { useState } from 'react';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  Bar, GridContainer, Logo, LogoImg, LogoSeparator,
  MenuLink, MenuIconContainer, MenuIcon, TTText,
  MobileTTText, Menu, MenuButton, MenuItem,
} from './Navbar.styles';
import '../../styles/components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Bar>
        <GridContainer>
          <Logo to="/">
            <LogoImg src="/static/navbar/logo.png" alt="logo" />
            <TTText>
              Theta Tau
              <LogoSeparator>
                |
              </LogoSeparator>
              Sigma Epsilon Chapter
            </TTText>
            <MobileTTText>
              ΣE Chapter
            </MobileTTText>
          </Logo>
        </GridContainer>
        <MenuIconContainer>
          <MenuIcon icon={faBars} onClick={handleOpen} />
        </MenuIconContainer>
      </Bar>
      <Menu right isOpen={isOpen} onClose={handleClose}>
        <MenuButton>
          <MenuIcon icon={faTimes} onClick={handleClose} />
        </MenuButton>
        <MenuItem>
          <MenuLink to="/" onClick={handleClose}>
            Home
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/history" onClick={handleClose}>
            History
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/brotherhood" onClick={handleClose}>
            Family
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/professionalism" onClick={handleClose}>
            Professionalism
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/service" onClick={handleClose}>
            Service
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/actives" onClick={handleClose}>
            Actives
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/alumni" onClick={handleClose}>
            Alumni
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/rush" onClick={handleClose}>
            Rush
          </MenuLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export { Navbar };

import React from 'react';
import { StyledMenu } from './menustyle';
import { Link } from 'react-router-dom';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link className="navblink" to="/settings">
        settings
      </Link>
      <Link className="navblink" to="/profile">
        Edit Profile
      </Link>
      <Link className="navblink" to="/channel">
        Channel Invites
      </Link>
      <Link className="navblink" to="/friend">
        Friend Requests
      </Link>
    </StyledMenu>
  );
};

export default Menu;

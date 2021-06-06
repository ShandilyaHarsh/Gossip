import '../CSS/navbar.css';
import { Link } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from './hooks';
import Logo from '../../images/logo.svg';
import Burger from '../jsx/comp/Burger/burger.js';
import Menu from '../jsx/comp/Menu/menu.js';

function Navbar() {
  const [open, setopen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setopen(false));

  

  return (
    <>
      <nav className="flex items-center justify-center overflow-x-hidden navb  pd-10">
        <Link to="/home">
          <img src={Logo} alt="logo" className="px-10 py-5"></img>
        </Link>
        <div ref={node}>
          <Burger open={open} setopen={setopen} />
          <Menu open={open} setopen={setopen} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;

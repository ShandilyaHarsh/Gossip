import React from 'react';
import  {StyledBurger}  from './burger-style';

const Burger = ({ open, setopen }) => {
  return (
    <StyledBurger open={open} onClick={() => setopen(!open)}>
      <div className="divi" />
      <div className="divi" />
      <div className="divi" />
    </StyledBurger>
  );
};


export default Burger;

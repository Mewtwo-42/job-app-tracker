import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopNavBar = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <div className='topnavbar'>
    </div>
  );
};

export default TopNavBar;

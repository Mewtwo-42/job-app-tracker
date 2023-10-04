import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/TeamFlowLogo.png';

const TopNavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redirect to the login page after logout
  };
  return (
    <div className='topnavbar'>
      <div>
        <img src='../../assets/TeamFlowLogo.png' alt='TeamFlow Logo'></img>
      </div>
      <div>
        <button className='dropdown-button'> My Projects</button>
      </div>
      <div>
        <button className='logout-button' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;
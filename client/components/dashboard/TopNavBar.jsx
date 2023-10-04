import React from 'react';
import { useNavigate } from 'react-router-dom';
import TeamFlowLogo from '../../assets/TeamFlowLogo.png';


const TopNavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redirect to the login page after logout
  };


  const handleClick = () => {
    navigate('/login')
  }

  return (
    <div className='flex justify-between items-center bg-customBlue p-4'>
      <div>
        <img src={TeamFlowLogo} alt='TeamFlow Logo' style={{ maxHeight: '40px' }}></img>
      </div>
      <div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        type="button"> My Projects</button>
        <button className='bg-red-400 hover:bg-blue-700 text-grey text-right font-bold py-2 px-4 rounded' onClick={handleLogout}>

          Logout
        </button>
      </div>
    </div>
  );
};

export default TopNavBar;
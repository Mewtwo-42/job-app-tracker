import React from 'react';
import TopNavBar from './TopNavBar.jsx'
import Dashboard from './Dashboard.jsx'

const Container = () => {
  return(
    <>
      <div className="container">
        <TopNavBar />
        <Dashboard/> 
      </div>
    </>
  )
}
export default Container;
import React from 'react';
// import './NavBar.css'; // Import the CSS file

const NavBar = ({ steps, currentStep }) => {
  return (
    <div className="navbar">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index + 1 === currentStep ? 'selected' : ''}`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default NavBar;

import React from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Button } from 'antd'; // Ensure you have this import if using Ant Design

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-theme-btn">
      <Button onClick={toggleTheme}>
        {darkTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </div>
  );
};

export default ToggleThemeButton;

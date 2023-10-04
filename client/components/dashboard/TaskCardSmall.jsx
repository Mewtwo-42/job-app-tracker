import React from 'react';
import Button from '@material-ui/core/Button';

const TaskCardSmall = ({ text }) => {
  return (
    <Button style={buttonStyle}>
      {text}
    </Button>
  );
};

const buttonStyle = {
  border: '1px solid blue',
  width: '100%', 
  height: '36px', 
  padding: '2px',
};

export default TaskCardSmall;


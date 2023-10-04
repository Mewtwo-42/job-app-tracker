
import React, { useState, useEffect } from 'react';
import TaskCardSmall from './TaskCardSmall.jsx';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';

const Column = ({ text }) => {
  const theme = useTheme();
  const [taskCard, setTaskCard] = useState([]);
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleClick = async () => {
    if (taskName.trim() !== '') {
      setTaskCard((prevCards) => [...prevCards, taskName]);
      setTaskName('');
    }
  };

  useEffect(() => {
    console.log('updating cards', taskCard[taskCard.length - 1]);
  }, [taskCard]);

  const textStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.palette.primary.main,
    // Add any other styles you want for the text prop
  };

  return (
    <Box border={1} padding={2} marginBottom={2} borderColor={theme.palette.primary.main}>
      <Box marginBottom={2} style={textStyle}>
        {text}
      </Box>
      <Grid container direction='column' justifyContent='flex-start' alignItems='stretch'>
        {taskCard.map((text, index) => (
          <Box key={index} marginBottom={1} width="100%">
            <TaskCardSmall text={text} />
          </Box>
        ))}
        <div>
          <TextField
            label="Task Name"
            value={taskName}
            onChange={handleInputChange}
            variant="outlined"
            size="small"
            fullWidth
            margin="dense"
          />
        </div>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            size="small"
          >
            Create
          </Button>
        </div>
      </Grid>
    </Box>
  );
};

export default Column;

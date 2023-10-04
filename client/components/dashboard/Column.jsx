import React from 'react';
import { useState, useEffect } from 'react';
import TaskCardSmall from './TaskCardSmall.jsx';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

const Column = ({text}) => {
  //useState for managing newly created cards
  const [taskCard, setTaskCard] = useState([]);
  const [taskName, setTaskName] = useState ('');
  //handles create button that creates our cards

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  }

  const handleClick = async () => {
    if(taskName.trim() !== ''){
        //adds taskName into the array
        setTaskCard((prevCards) => [...prevCards, taskName]);
        setTaskName('');
    }
  };
  useEffect(()=>{
    console.log('updating cards', taskCard[taskCard.length-1])
  },[taskCard])
//use a loop to create TaskCardSmall w/ all taskNames
  return (
    <div>
      {text}
      <Grid
        container
        direction='column'
        justifyContent='flex-start'
        alignItems='stretch'
      >
        {/* rows that will be populating on our column */}
        {/* text will be the element from the current index */}
        {taskCard.map((text, index) => ( 
          <TaskCardSmall key={index} text={text} />
        ))}
        <div>
          <TextField
              label="Task Name"
              value={taskName}
              onChange={handleInputChange}
          />
          <button
              // className=""
              type='button'
              onClick={handleClick}
          >
              Create
          </button>
        </div>
      </Grid>
    </div>
  );
};

export default Column;
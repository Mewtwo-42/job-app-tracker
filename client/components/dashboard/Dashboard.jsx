import React from 'react';
import {useState} from 'react';
import Column from './Column.jsx'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

//will create columns at this level
const Dashboard = () => {
    //useState for managing newly created columns
    const [column, setColumn] = useState ([]);
    const [inputText , setInputText] = useState('');

    //set the text from input field
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    }

    //handles create button that creates our columns
    const handleClick = async () => {
      //check if the input 
      if(inputText.trim() !== ''){
       setColumn(prevColumns=> [...prevColumns, column]);
       setInputText('');
      }
    }



    return (
        // Organize the columns with a grid
        <div>
          <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="stretch"
          > 
          {column.map((text, index) => (
            <Column key={index} text={text} />
          ))}
          {inputText}
          <div>
            <TextField
                label="Enter Text"
                value={inputText}
                onChange={handleInputChange}
              />
            <button
                  // className=""
                  type="button"
                  onClick={handleClick}
                >
                  New Column
            </button>
          </div>
          </Grid>
        </div>
    )


}

export default Dashboard;
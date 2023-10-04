
import React, { useState } from 'react';
import Column from './Column.jsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const Dashboard = () => {
  const [columns, setColumns] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = async () => {
    if (inputText.trim() !== '') {
      setColumns((prevColumns) => [...prevColumns, inputText]);
      setInputText('');

    }
  };

  return (
    <div>
      <Box border={1} padding={2} marginBottom={2}>
        <Grid container spacing={2}>
          {columns.map((text, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Paper style={{ padding: 8, border: '1px solid #ccc', minHeight: 80 }}>
                <Column text={text} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <div style={{ marginBottom: '16px' }}>
        <TextField
          label="Enter Text"
          value={inputText}
          onChange={handleInputChange}
          style={{ marginRight: '8px' }}
        />
        <Button variant="contained" color="primary" size="small" onClick={handleClick}>
          New Column
        </Button>
      </div>
    </div>
  );
};


export default Dashboard;
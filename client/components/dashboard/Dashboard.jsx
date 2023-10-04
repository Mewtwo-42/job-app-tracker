import {useState} from 'react';
import {userNavigate} from 'react-router-dom';
import Column from './Column.jsx'
import Grid from '@material-ui/core/Grid'


//will create columns at this level
const Dashboard = () => {
    //useState for managing newly created columns
    const [column, setColumn] = useState ([]);

    //handles create button that creates our columns
    const handleClick = async () => {
       setColumn(prevColumns=> [...prevColumns, prevColumns.length+1]);
    }

    return (
        // Organize the columns with a grid
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="stretch"
        > 
        {column}
        <button
                // className=""
                type="button"
                onClick={handleClick}
              >
                Register
              </button>
        </Grid>
    )


}
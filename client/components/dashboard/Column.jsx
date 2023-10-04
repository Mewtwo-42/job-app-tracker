import {useState} from 'react';
import {userNavigate} from 'react-router-dom';
import TaskCardSmall from './TaskCardSmall.jsx'
import Grid from '@material-ui/core/Grid'

const Column = () => {
    //useState for managing newly created cards
    const [taskCard, setTaskCard] = useState ([]);

    //handles create button that creates our cards
    const handleClick = async () => {
        setColumn(prevCards=> [...prevCards, prevCards.length+1]);
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
        > 
            {/* rows that will be populating on our column */}
            {taskcard}
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
import React from 'react';

//getting passed to column
const TaskCardSmall = ({key, text}) => {
    //render the text
    return (
        <button label = {text}/>
    )
};

export default TaskCardSmall;
import React from 'react';
import Layout from '../Layout.jsx';

const Tasks = (props) => {
    console.log('desde tasks', props);
    return(

        <h1>Tasks work</h1>
    )
}

export default Layout(Tasks)
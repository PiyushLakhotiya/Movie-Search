import React from 'react';
import Input from '../Input/input';

import classes from './jumbotron.module.css';

const jumbotron = (props) => {
    return (
         <div className={classes.main}>
             <Input input={props.input} setInput={props.setInput}/>
         </div>
    );
}

export default jumbotron;
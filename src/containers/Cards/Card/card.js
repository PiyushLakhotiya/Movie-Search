import React from 'react';
import classes from './card.module.css';

const card = props => (
    <div className={classes.main}>
        <img className={classes.image} src="https://www.soda.com/wp-content/uploads/2020/04/harry-potter-streaming-guide.jpg" alt="Img Not Found"/>
        <div className={classes.title}>Harry Potter</div>
        <div className={classes.date}>25 Jan 2021</div>
    </div>
);

export default card;
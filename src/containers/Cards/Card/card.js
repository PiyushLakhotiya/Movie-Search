import React from 'react';
import classes from './card.module.css';

const card = props => {
    
    let posterURL = `https://image.tmdb.org/t/p/w500/${props.poster}`;
    return (
    <div className={classes.main}>
        <img className={classes.image} src={posterURL} alt="Img Not Found"/>
    <div className={classes.title}>{props.title}</div>
        <div className={classes.date}>{props.release}</div>
    </div>
)};

export default card;
import React from 'react';
import Card from './Card/card';
import classes from './Cards.module.css';

const Cards = props => {
    return (
        <div className={classes.main}>
            <div>Trending Movies</div>
            <div className={classes.secondary}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Cards;
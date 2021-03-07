import React from 'react';
import Button from '../Button/button';
import classes from './input.module.css';

const input = props => (
    <div className = {classes.main}>
        <input 
            placeholder="Search for a movie, tv show, anime..."
            className = {classes.input}
            onChange = {(event) => props.setInput(event.target.value)}
            value = {props.input} />
        <Button />
    </div>
    )

export default input;
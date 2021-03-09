import React, {useEffect, useState} from 'react';
import Card from './Card/card';
import axios from '../../axios';
import { api } from '../../Constant';
import classes from './Cards.module.css';

const Cards = props => {
    const [trending, setTrending] = useState([]);
    const url = `/trending/${props.search}/day?api_key=${api}`;
        
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(url);
            setTrending(result.data.results);
        }
        fetchData();
    }, []);
    
    
    return (
        <div className={classes.main}>
            <div>Trending {props.search}</div>
            <div className={classes.secondary}>
                { trending.map(el => {
                    return <Card
                    poster = {el.poster_path}
                    release = {el.release_date !== undefined ? el.release_date : el.first_air_date}
                    overview={el.overview}
                    key = {el.id}
                    title = {el.title !== undefined ? el.title : el.name}
                    votes = {el.vote_average} />
                }) }
            </div>
        </div>
    );
}

export default Cards;
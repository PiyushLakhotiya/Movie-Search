import React, {useState} from 'react';
import Navbar from '../components/UI/Navbar/Navbar';
import Jumbotron from '../components/UI/Jumbotron/jumbotron';

const Home = () => {
    const [input, setInput] = useState('');
    return (
        <>
            <Navbar />
            <Jumbotron input={input} setInput={setInput}/>
        </>
    );
}

export default Home;
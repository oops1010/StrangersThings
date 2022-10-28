import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

const Home = ({guest}) => {
    return (
        <>
        <h1>Welcome to Strangers' Things</h1>
        {guest ? <h2>You are logged in as {guest.username}</h2> : null}
        </>
    )
}

export default Home;
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';

const Cards = () => {
    const searchRef =useRef('');
    const [cart,setCart]=useState()   
    
    const [takeSearch, setTakeSearch]=useState([]);
    console.log(takeSearch);

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${takeSearch}`)
        .then(res=>res.json())
        .then(data=>console.log(data.data))
    },[takeSearch])

    const handleSearch =(event)=>{
        event.preventDefault();
        const search =searchRef.current.value;
        setTakeSearch(search);
        console.log(search);
       
        

    }
    return (
        <div>
            <h3>aj amar mon valo nei </h3>
            <form onSubmit={handleSearch}>
                <input ref={searchRef} type="text" />
                <button type='submit'>Search</button>
            </form>

           
            
        </div>
    );
};

export default Cards;
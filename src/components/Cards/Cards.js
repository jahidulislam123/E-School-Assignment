import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Cards.css'

const Cards = () => {
    const searchRef =useRef('');
    const [cart,setCart]=useState([])   
    
    const [takeSearch, setTakeSearch]=useState([]);
    console.log(takeSearch);
    

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/phones?search=${takeSearch}`)
        .then(res=>res.json())
        .then(data=>setCart(data.data))
    },[takeSearch])

    const handleSearch =(event)=>{
        event.preventDefault();
        const search =searchRef.current.value;
        setTakeSearch(search);
       
       
        

    }
    return (
        <div >
            
            <div className='total-container '>
            <form   onSubmit={handleSearch}>
                <input className='text-center' ref={searchRef} type="text" placeholder='       Samsung , IPhone, Huawei.............' />
                <button className='button-design' type='submit'>Search</button>
            </form>
            
            </div>
            <h3 >Please serch by samsung , iphone ,huawei</h3>

          <div className='flex items-center justify-center min-h-screen container mx-auto'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
             {

            cart.map(phone=><SingleCart
            key={phone.id}
            phone={phone}
            
            ></SingleCart>)
           }
          </div>
          </div>
            
        </div>
    );
};

export default Cards;
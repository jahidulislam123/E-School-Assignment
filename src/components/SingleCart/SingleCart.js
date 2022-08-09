import React from 'react';
import { useState } from 'react';
import PhoneDetails from '../PhoneDetails/PhoneDetails';

const SingleCart = ({phone}) => {
    const{image,phone_name,brand ,slug}=phone;
    const[singlephoneDetails,setSinglephoneDetails]=useState([])
    const details = id =>{
        const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data.data));
        .then(data =>setSinglephoneDetails(data.data));

    }
    return (


    

        <div >
             
            <div className='card'>
            <div className='card  rounded text-left p-8 '>
                <h2>{singlephoneDetails.name}</h2>
                <h2>{singlephoneDetails.brand}</h2>
                <h2>{singlephoneDetails.releaseDate}</h2>
                
             
             </div>
            <div className='p-5 flex flex-col'>
                <div className='rounded-xl overflow-hidden '>
                    <img src={image} alt="" />

                </div>
                <div className='text-left'>
                <h5 className='text-2xl md:text-3xl font-medium mt-3'>{phone_name}</h5>
                <h5 className='text-2xl md:text-3xl font-medium mt-3'>{brand}</h5>
                <h5 className='text-2xl md:text-3xl font-medium mt-3'>{slug}</h5>
                </div>
                <button   
                className='text-center text-white bg-orange-500 text-white-700 rounded-lg font-semibold mt-4 hover:bg-orange-300 focus:scale-95 transition-all duration-200 ease-out py-2'
                onClick={()=>details(slug)}
                >Details</button>

            </div>

            
            
        </div>
        </div>
    );
};

export default SingleCart;
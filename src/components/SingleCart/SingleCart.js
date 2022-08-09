import React from 'react';

const SingleCart = ({phone}) => {
    const{image,phone_name,brand ,slug}=phone;
    return (
        <div className='rounded-xl shadow-lg'>
            <div className='p-5 flex flex-col'>
                <div className='rounded-xl overflow-hidden '>
                    <img src={image} alt="" />

                </div>
                <div className='text-left'>
                <h5 className='text-2xl md:text-3xl font-medium mt-3'>{phone_name}</h5>
                <h5 className='text-2xl md:text-3xl font-medium mt-3'>{brand}</h5>
                <h5 className='text-2xl md:text-3xl font-medium mt-3'>{slug}</h5>
                </div>
                <button className='text-center bg-blue-400 text-blue-700 rounded-lg font-semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out py-2 '>Details</button>

            </div>
            
        </div>
    );
};

export default SingleCart;
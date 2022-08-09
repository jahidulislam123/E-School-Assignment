import React from 'react';

const PhoneDetails = ({singlephoneDetails}) => {
    const {image ,brand ,name , releaseDate}=singlephoneDetails;
    return (
        <div>
            <h2>{image}</h2>
            
        </div>
    );
};

export default PhoneDetails;
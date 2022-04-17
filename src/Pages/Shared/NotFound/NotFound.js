import React from 'react';
import sleeping from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary pt-3 text-center'>Page Not Found</h2>
            <img className='w-50 mx-auto d-block' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;
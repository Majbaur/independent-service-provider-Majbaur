import React from 'react';
import achivement from '../../images/achivement.jpg'
import './Achievement.css'

const Achievement = () => {
    return (
        
        <div class="half-width text pb-5 pt-5">
            <h1 className='pt-5 text-center'>Achievement 
            <img style={{ width:'100px'}} src={achivement} alt="" />
            </h1>
            <p className='text-center'> In 2007, I participate in the master bodybuilding championship in Tokyo. I was the champion in this game. Now I am a national Coach in our country. In 2010  got the achievement as a "Master Boy" in our country. Now I am a physical sports trainer in our city.
            </p>
        </div>

    );
};

export default Achievement;
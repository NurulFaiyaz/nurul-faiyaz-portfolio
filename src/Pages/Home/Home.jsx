import React from 'react';
import Introduction from '../../Components/Introduction/Introduction';
import About from '../../Components/About/About';
import Skill from '../../Components/Skill/Skill';

const Home = () => {
    return (
        <div className=''>
            <Introduction></Introduction>
            <About></About>
            <Skill></Skill>
        </div>
    );
};

export default Home;
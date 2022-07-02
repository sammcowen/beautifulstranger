import React from 'react';
import './Services.css';
// import HeartEmoji from '../../img/heartEmoji.png';
// import Glasses from '../../img/glasses.png';
// import Humble from '../../img/humble.png';

const Services = () => {
    return (
        <div className="services">

            {/* left side  */}
            <div className="amazing">
                <span>My Amazing</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet 
                    <br/>consectetur adipisicing elit.</span>
                    <button className='button s-button'>Download CV</button>
                    <div className="blur s-blur1" style={{ background:'#ABF1FF94'}}></div>

            </div>
            {/* right side */}
            <div className="cards">
                 am the right side 
            </div>
        </div>
    )
}
export default Services;
import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
// import Humble from '../../img/humble.png';
import Card from '../Card/Card';
const Services = () => {
    return (
        <div className="services">

            {/* left side  */}
            <div className="amazing">
                <span>My Amazing</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum <br/>
                 ipsum quas quae tenetur eos aliquam dolor id a</span>
                    <button className='button s-button'>Download CV</button>
                    <div className="blur s-blur1" style={{ background:'#ABF1FF94'}}></div>

            </div>
            {/* right side */}
            <div className="cards">
                 <div style ={{left:'14rem'}}>
                    <Card emoji = {HeartEmoji} heading = {'Languages'} detail = {'React'}/>
                    
                 </div>
                 <div style ={{top: '12rem', left:'-4rem'}}>
                    <Card emoji = {Glasses} heading = {'Full Stack Dev'} detail = {'MongoDb, Express, React, Node.js'}/>
                    
                 </div>
            </div>
        </div>
    )
}
export default Services;
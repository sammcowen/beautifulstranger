import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Samm from '../../img/samm.jpg';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
// import thumbup from '../img/thumbup.png';
import Crown from '../../img/crown.png';
// import glassesemoji from '../../img/glassesemoji.png';


const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi ! I am </span>
                    <span>Samm Cowen</span>
                    <span>Front end dev bio here</span>
                </div>
                <button className="i-button button">Hire Me</button>
                <div className="i-icons">
                    <a href="https://github.com/sammcowen">
                        <img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/samantha-renee-cowen-09487970/"><img src={LinkedIn} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Samm} alt="" />
                <div>
                    <FloatingDiv image ={Crown}/>
                </div>
            </div>
        </div>

    )
}
export default Intro;
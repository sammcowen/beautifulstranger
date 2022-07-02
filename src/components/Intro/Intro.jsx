import React from 'react';
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Samm from '../../img/samm1.png';

import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesemoji from '../../img/glassesemoji.png';


const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hi ! I am </span>
                    <span>Samm Cowen</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia incidunt sequi tempora, veritatis corrupti accusantium voluptatem aut iusto, atque cumque, maxime inventore amet molestiae quia? Iste repudiandae unde sapiente?</span>
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
                <img src={glassesemoji} alt="" />
                <div style={{top:'-4%',left: '68%'}}>
                    <FloatingDiv image={crown}txt1='Web'txt2='Developer'/>
                </div>
                <div style={{top:'18rem',left:'0rem'}}>
                    <FloatingDiv image={thumbup} txt1='Natural' txt2='Problem Solver' />
                </div>
               {/* blur divs */}
               <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
               <div className='blur' style={{ background:'#C1F5FF',top:'17rem',width:'21rem', height:'11rem', left:'-9rem'}}></div>
            </div>
        </div>

    )
}
export default Intro;
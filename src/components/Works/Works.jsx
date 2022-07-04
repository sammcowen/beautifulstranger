import React from 'react';
import './Works.css';

import Basic from '../../img/html.png';
import React1 from '../../img/react.png';
import Node from '../../img/node.png';
import Sql1 from '../../img/sql.jpg';
import Mongo1 from '../../img/mongodbv.png';


const Works = () => {
    return (
<div className="works">
   {/* left side */}
    <div className="amazing">
                <span>Works with All these</span>
                <span>Technologies</span>
                
                 
                    <button className='button s-button'>Hire Me</button>
                    <div className="blur s-blur1" style={{ background:'var(--blueCard)'}}></div>
                    </div>
                {/* right side  */}
                <div className="w-right">
                    <div className="w-mainCircle">
                        <div className="w-secCircle">
                            <img src={Mongo1} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Node} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={Sql1} alt="" />
                        </div>{' '}
                        <div className="w-secCircle">
                            <img src={Basic} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={React1} alt="" />
                        </div>
                    </div>
                    {/* background circles */}
                    <div className="w-backCircle blueCircle"></div>
                    <div className="w-backCircle yellowCircle"></div>
                </div>

            </div>

    )
}
export default Works; 
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
                {/* right side  */}
                <div className="w-right">
                    <div className="w-mainCircle">
                        <div className="w-secCircle">
                            <img src={} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={} alt="" />
                        </div>
                    </div>
                </div>

            </div>
</div>
    )
}
export default Works; 
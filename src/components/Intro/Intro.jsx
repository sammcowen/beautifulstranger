import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';


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
          <div className="i-right"> i am the right side </div>
      </div>
    )
}
export default Intro;
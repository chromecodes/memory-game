import React, { Component } from "react";
import { FaGithub, FaCode } from "react-icons/fa";
export default class Footer extends Component {
  render() {
    return (
      <footer className='footer' id='footer'>
        <span className='user'>
          The{" "}
          <a href='https://www.theodinproject.com/' className='odin'>
            Odin
          </a>{" "}
          Project
          <a href='https://github.com/chromecodes/memory-game'>
            {" "}
            <FaCode className='faCode' />{" "}
          </a>
          chromecodes
          <a href='https://github.com/chromecodes'>
            {" "}
            <FaGithub className='faGithub' />
          </a>
        </span>
      </footer>
    );
  }
}

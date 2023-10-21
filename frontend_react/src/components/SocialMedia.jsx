import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/giimyy/">
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/Giimyy">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://www.instagram.com/giimyy.co/">
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;

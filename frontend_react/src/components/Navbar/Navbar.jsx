import React, { useState } from "react";
import { HiX } from "react-icons/hi/index";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={"app__navbar"}>
      <div className={`app__navbar-logo ${toggle ? "hidden" : ""}`}>
        <img src={images.logosvg} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <img
          className="menu-icon"
          src={images.menu}
          onClick={() => {
            setToggle(true);
            document.querySelector(".menu-icon").style.opacity = 0;
            document.querySelector(".app__navbar-logo").classList.add("hidden");
          }}
        />

        {toggle && (
          <motion.div
            whileInView={{ y: [-500, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <HiX
              onClick={() => {
                setToggle(false);
                document.querySelector(".menu-icon").style.opacity = 1;
                document
                  .querySelector(".app__navbar-logo")
                  .classList.remove("hidden");
              }}
            />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => {
                      setToggle(false);
                      document.querySelector(".menu-icon").style.opacity = 1;
                      document
                        .querySelector(".app__navbar-logo")
                        .classList.remove("hidden");
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

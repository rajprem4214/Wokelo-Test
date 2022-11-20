import React from "react";
import logo from '../../assets/Wokelo - Final logo (1) 1.png'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header>
        <div className="nav_container">
          <div class="logo">
            <img src={logo} alt="" />
            &nbsp;
            <span>WOKELO</span>
          </div>

          <nav ref={navRef}>
            {/* <ul>
              <li> */}
                <a href="/#">Home</a>
              {/* </li> */}

              {/* <li> */}
                <a href="/#product">Product</a>
              {/* </li> */}

              {/* <li> */}
                <a href="/#hiw">How it works</a>
              {/* </li> */}

              {/* <li> */}
                <a href="/#contact" class="btn">
                  Contact
                </a>
              {/* </li> */}
            {/* </ul> */}
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
        {/* <!-- End of desktop navigation menu --> */}

        {/* <nav class="mobile-nav">
            <div class="logo">GD.</div>
            <div class="menu-icon">
              <img src="images/menu-icon.svg" alt="" />
            </div>
          </nav>

          <div class="mobile-menu-container">
            <div class="close-icon">
              <img src="images/close-icon.svg" alt="" />
            </div>

            <ul>
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>

              <li>
                <a href="#">Our Work</a>
              </li>

              <li>
                <a href="#" class="btn dark">
                  Enrol Now
                </a>
              </li>
            </ul>
          </div> */}

        {/* <!-- End of mobile navigation menu --> */}

        <div>
          <span className="hero_header1">Business research</span>
          <span className="hero_header2">10x faster</span>
          <div className="para_wrapper">
            <p className="hero_para">
              World's first AI business analyst, Wokelo helps cut down tedious
              <br />
              time spent in qualitative research and generates comprehensive
              <br />
              <span style={{ display: "flex", justifyContent: "center" }}>
                analysis in minutes.
              </span>
            </p>
          </div>
          <div className="btn_wrapperxd">
            <button className="main_btn">Join waitlist</button>
          </div>
          <div className="main_image">
            <img src="https://i.ibb.co/tKqt7w4/Group-3766.png" alt="" />
          </div>
        </div>
      </header>

      {/* <!-- End of the header section --> */}
    </>
  );
};

export default Header;

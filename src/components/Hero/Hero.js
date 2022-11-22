import React from "react";
import "./Hero.css";
import image1 from "../../assets/Mask_group1.png";
import image2 from "../../assets/Mask group.png";
import image3 from "../../assets/Mask group2.png";
import image4 from "../../assets/Mask group3.png";
const Hero = () => {
  return (
    <div className="info_section">
      {/* <div className="wave_img"> */}
      {/* <img src="https://i.ibb.co/bdTS8yY/Group-3772.png" alt="" /> */}
      {/* <svg
          id="visual"
          viewBox="0 0 960 540"
          width="960"
          height="540"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path
            d="M0 208L80 174.3C160 140.7 320 73.3 480 127C640 180.7 800 355.3 880 442.7L960 530L960 541L880 541C800 541 640 541 480 541C320 541 160 541 80 541L0 541Z"
            fill="#272727"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg> */}
      {/* </div> */}
      <div className="curved">
        <svg
          id="visual"
          viewBox="0 0 960 540"
          width="960"
          height="540"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path
            d="M0 208L80 174.3C160 140.7 320 73.3 480 127C640 180.7 800 355.3 880 442.7L960 530L960 541L880 541C800 541 640 541 480 541C320 541 160 541 80 541L0 541Z"
            fill="#272727"
            stroke-linecap="round"
            stroke-linejoin="miter"
          ></path>
        </svg>
        <div className="curved_content">
          <div className="curved_left">
            <p className="cl_para">
              <span style={{ color: "#795EFF" }}>
                Think of it as an AI-powered <br />
                platform to
              </span>
              <span>
                {" "}
                perform diverse
                <br /> business research tasks.
              </span>
            </p>
            <span className="cl_list">For example:</span>
            <ul className="cl_list">
              <li>
                Generate a comprehensive analysis on “drone
                <br />
                software industry”{" "}
              </li>
              <li>
                Perform a competitor benchmarking on “early- <br /> stage SAAS
                competing with monday.com”{" "}
              </li>
              <li>
                Detailed analysis of “product launches in 5G <br /> Open RAN in
                US and UK”{" "}
              </li>
            </ul>
          </div>
          <div className="curved_right">
            <img src="https://i.ibb.co/dLGj3YK/Group-3762.png" alt="" />
          </div>
        </div>
      </div>
      <div id="product" className="below_wave">
        <div className="bw_header">Wokelo’s Capabilities</div>
        <div className="boxes">
          <div className="box">
            <div className="image_holder">
              <img src={image1} alt="adad" />
            </div>
            <p className="box_header">Competitive analysis</p>
            <p className="box_material">
              Extract information related to overview, recent strategy, product,
              business model, financials, etc.
            </p>
          </div>
          <div className="box">
            <div className="image_holder">
              <img src={image2} alt="adad" />
            </div>
            <p className="box_header">Industry & sector deep-dive</p>
            <p className="box_material">
              For any industry - generate reports covering trends, size,
              technologies, innovation, start-up activity, etc.
            </p>
          </div>
          <div className="box">
            <div className="image_holder">
              <img src={image3} alt="adad" />
            </div>
            <p className="box_header">Open-ended research </p>
            <p className="box_material">
              For any topic - generate quick insights, reading lists, brainstorm
              key questions, synthesize existing documents
            </p>
          </div>
          <div className="box">
            <div className="image_holder">
              <img src={image4} alt="adad" />
            </div>
            <p className="box_header">Consumer research</p>
            <p className="box_material">
              Scan thousands of customer reviews across portals to generate
              actionable insights, analyze market signals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

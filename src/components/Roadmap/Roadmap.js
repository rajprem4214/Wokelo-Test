import React from "react";
import "./Roadmap.css";
import { ImLocation } from 'react-icons/im'
import { FiMail } from 'react-icons/fi'
import process from "../../assets/process.png";
import bino from "../../assets/bino.png";
import light from "../../assets/light.png";
import time from "../../assets/time.png";
import hiw from "../../assets/hiw.png";
import arrow from "../../assets/Group 3775.png";
import bubbles from "../../assets/Group 3776.png";

const Roadmap = () => {
  return (
    <div className="roadpage_wrapper">
      <div className="header_wrapper">
        <div className="road_header">Current research process is broken!</div>
        <p className="road_para">
          Qualitative business research is time-consuming and leave precious
          little time for actual
          <span
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            problem-solving!
          </span>
        </p>
      </div>
      <div className="process">
        {/* <span className="process_span">
          <span className="span_number">1</span>
          <br />
          DISCOVER
        </span>
        <span className="process_span">
          <span className="span_number">2</span>
          <br />
          SYNTHESIZE
        </span>
        <span className="process_span">
          <span className="span_number">3</span>
          <br />
          DISSEMINATE
        </span> */}
        <img src={process} alt="" />
      </div>

      <div className="process_wrapper">
        <div className="process_box">
          <div className="pbox_header">Find needle in haystack</div>
          <div className="pbox_img">
            <img src={bino} alt="" />
          </div>
          <div className="pbox_material">
            <p>
              Wokelo identifies which are the <br /> credible sources for your
              request <br />
              from thousands of articles in web
            </p>
          </div>
        </div>
        <div className="process_box">
          <div className="pbox_header">Lighterning fast co-authoring</div>
          <div className="pbox_img">
            <img src={light} alt="" />
          </div>
          <div className="pbox_material">
            <p>
              Wokelo writes content in its <br /> own words based only on the{" "}
              <br /> context provided
            </p>
          </div>
        </div>
        <div className="process_box">
          <div className="pbox_header">Spend less time on formatting</div>
          <div className="pbox_img">
            <img src={time} alt="" />
          </div>
          <div className="pbox_material">
            <p>
              Wokelo generates well- <br /> formatted output of your choice
              <br /> - word, ppt, google docs etc.
            </p>
          </div>
        </div>
      </div>

      <div className="process_footer">
        <img src={bubbles} alt="" />
        <div className="pf_header">
          Built for knowledge workers <br />
          <span style={{ color: "white" }}> by knowledge workers!</span>
        </div>
        <div className="pf_wrapper">
          <p className="pf_content">
            We are a team with over 20 years of strategy, innovation and
            consulting experience. We {/* <br />  */}
            understand the challenges of a typical business research process.
            <br />
            <br />
            Whether you are a strategy or innovation professional, consultant,
            product manager, {/* <br /> */}
            research or business analyst involved in qualitative research.
            Wokelo will help enhance {/* <br /> */}
            your productivity by 10x and ensure abundant time is left for actual
            problem solving.
          </p>
        </div>
      </div>

      <div id="hiw" className="hiw">
        <div className="hiw_left">
          <img src={hiw} alt="" />
        </div>
        <div className="hiw_right">
          <p className="hiw_header">How it works</p>
          <div className="hiw_wrapper">
            <p className="hiw_content1">
              Think of it as an AI-powered platform to perform
              {/* <br /> */} diverse business research tasks. Simply type your
              {/* <br />  */} research query, choose sources to refer, and
              {/* <br /> */} desired document format. That’s it, generate{" "}
              {/* <br /> */}
              reports in less than 5 minutes!
            </p>
            <p className="hiw_content2">
              At its core it uses a combination of large language
              {/* <br /> */} models and generative AI tools like GPT-3 and our
              {/* <br /> */} proprietary NLP models to perform quanlitative
              {/* <br /> */} analysis at a fidelity and speed that was not
              {/* <br /> */} possible before.
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className="footer">
        <div className="access">
          <p className="beta">
            To know more about our product, <br /> click below for early beta
            access.
          </p>
          <div className="btn_wrapper">
            <button className="main_btn wait_btn">
              {" "}
              <a
                href="https://forms.gle/bRaidaCh3NEo2Zx3A/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Waitlist
              </a>
            </button>
            <div className="arrow_img">
              <img src={arrow} alt="" />
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="contact_left">
            <div className="address">
              <p className="add_header">Contact</p>
              <p className="add_content">
                <ImLocation /> &nbsp; Datacreek Labs Inc.
                <br />
                16080 NE 85th ST <br />
                Redmond, WA 98052
              </p>
              <p className="add_link">
                {" "}
                <FiMail /> &nbsp; support@wokelo.ai
              </p>
            </div>
          </div>
          <div className="contact_right">
            <div className="follow_content">
              <p className="follow">Follow</p>
              <p className="sign_up">
                Sign up to get the latest news on our product.
              </p>
              <div className="subs">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your email here"
                />
                &nbsp;
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="policy">
          ©2022 Datacreek Labs Inc. &nbsp;&nbsp; <span>Terms</span> &nbsp;&nbsp;
          <span>Privacy</span>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

import React from "react";
import * as FaBIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FcIcons from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "./modules.Sign.css";

function Sign() {
  return (
    <>
      <section className="section-signIN">
        <div className="signContainer">
          <div className="BodyContainer">
            <div className="platfrom-container">
              <div className="login-word">
                <span>login with</span>
              </div>
              <div className="platform">
                <Link to="#">
                  <FcIcons.FcGoogle />

                  <span>google</span>
                </Link>
                <Link to="#">
                  <FaBIcons.FaFacebookF />
                  <span>facebook</span>
                </Link>
              </div>
              <div className="or-word">
                <span>or</span>
              </div>
            </div>

            <div className="signBody">
              <span>username</span>
              <input type="text" placeholder="enter your username"></input>
              <span>password</span>
              <input type="password" placeholder="enter your password"></input>
              <button className="login-btn">log in</button>
              <div className="signup">
                <span>don't have account?</span>
                <Link to="/signup">sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sign;

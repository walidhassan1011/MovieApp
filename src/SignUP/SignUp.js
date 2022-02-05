import React from "react";
import * as FaBIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FcIcons from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./modules.SignUp.css";

function SignUp() {
  return (
    <>
      <section className="MainSignup">
        <div className="signup-container">
          <div className="switch-container">
            <Link to={"/signp"}>signup</Link>
            <Link to="/">login</Link>
          </div>
          <div className="h1-signup">
            <h1>sign up</h1>
          </div>
          <div className="Name-container">
            <div className="sec-container">
              <div className="their-container">
                <div className="name">
                  <input placeholder="first name"></input>

                  <input placeholder="last name"></input>
                </div>
                <div className="emailfield">
                  <input type="email" placeholder="email address"></input>
                </div>
                <div className="password">
                  <input
                    type="password"
                    placeholder="set password"
                    required
                  ></input>
                  <input
                    type="password"
                    placeholder="confirm password"
                    required
                  ></input>
                </div>
                <div className="signup-btn">
                  <Link to="/signin">get started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;

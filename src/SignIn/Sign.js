import React from "react";
import * as FaBIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FcIcons from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert, Form } from "react-bootstrap";

import "./modules.Sign.css";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, stError] = useState("");

  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      navigate("/movies");
    } catch (err) {
      stError(err.message);
    }
  };
  return (
    <>
      <section className="section-signIN">
        <Form onSubmit={handleSubmit} className="signContainer">
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
            {error && <Alert variant="danger">{error}</Alert>}

            <div className="signBody">
              <span>username</span>
              <input
                type="text"
                required
                placeholder="enter your username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
              <span>password</span>
              <input
                type="password"
                required
                placeholder="enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <button className="login-btn">log in</button>
              <div className="signup">
                <span>don't have account?</span>
                <Link to="/signup">sign up</Link>
              </div>
            </div>
          </div>
        </Form>
      </section>
    </>
  );
}

export default Sign;

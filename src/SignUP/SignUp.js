import React from "react";
import * as FaBIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FcIcons from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./modules.SignUp.css";
import { useUserAuth } from "../context/UserAuthContext";
import { Alert, Form } from "react-bootstrap";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, stError] = useState("");
  const navigate = useNavigate();
  const { signUp } = useUserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      stError(err.message);
    }
  };
  return (
    <>
      <section className="MainSignup">
        <Form onSubmit={handleSubmit} className="signup-container">
          <div className="switch-container">
            <Link to={"/signp"}>signup</Link>

            <Link to="/">login</Link>
          </div>
          <div className="h1-signup">
            <h1>sign up</h1>
          </div>
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="Name-container">
            <div className="sec-container">
              <div className="their-container">
                <div className="name">
                  <input placeholder="first name"></input>

                  <input placeholder="last name"></input>
                </div>
                <div className="emailfield">
                  <input
                    type="email"
                    placeholder="email address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="password">
                  <input
                    type="password"
                    placeholder="set password"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  ></input>
                  <input
                    type="password"
                    placeholder="confirm password"
                    required
                  ></input>
                </div>
                <div className="signup-btn">
                  <button type="submit">get started</button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </section>
    </>
  );
}

export default SignUp;

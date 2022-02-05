import "./App.css";
import * as FaBIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tv from "./TV/Tv";
import Sidermenu from "./Sidermenu/Sidermenu";
import SignUp from "./SignUP/SignUp";
import Movies from "./Movies/Movies";
import Details from "./Details/Details";
import Sign from "./SignIn/Sign";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return <></>;
}

export default App;

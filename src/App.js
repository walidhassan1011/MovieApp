import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/card/Card";
import Sidermenu from "./components/Sidermenu/Sidermenu";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/login/Login";

function App() {
  const [sidbar, setsidbar] = useState(false);

  const showsider = () => {
    setsidbar(!sidbar);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Navbar showsider={showsider} />} />
        </Routes>

        <Routes>
          <Route path="/home" element={<Card />} />
        </Routes>
        <Routes>
          <Route
            path="/home"
            element={<Sidermenu showsider={sidbar} sider={showsider} />}
          />
        </Routes>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

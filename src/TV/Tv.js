import React from "react";
import * as FaBIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./modules.Tv.css";
function Tv() {
  const [shows, setshows] = useState([]);
  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/trending/tv/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff"
    ).then((res) => {
      const tvshows = res.data.results;
      console.log(tvshows);

      setshows(tvshows);
    });
  }, []);

  return (
    <>
      <section className="Main">
        <div className="container">
          {shows.map((show) => {
            return (
              <div className="cardBody" key={show.id}>
                <img
                  src={"https://image.tmdb.org/t/p/w500" + show.poster_path}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Tv;

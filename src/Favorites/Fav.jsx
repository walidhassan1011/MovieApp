import React, { Fragment } from "react";

import * as BiIcons from "react-icons/bi";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";
import Sidermenu from "../Sidermenu/Sidermenu";
import Card from "../Card/Card";
import style from "../Favorites/Fav.module.css";
class Fav extends Component {
  baseUrl = "https://image.tmdb.org/t/p/w500";

  render() {
    // console.log("favs in favcomponent:")
    // console.log(this.props.title)
    // console.log(JSON.stringify(this.props.favorites))
    return (
      <Fragment>
        <Sidermenu />

        <div className={"container " + style.container}>
          <h1 className="text-white display-3 my-4">
            <Link to={"/movies"}>
              <BiIcons.BiArrowBack className="text-danger" />
            </Link>{" "}
            Favorites:{" "}
          </h1>
          <div className="row pt-5">
            {this.props.favorites.map((val) => {
              let truthyVal = val.name || val.original_title || val.title;
              return (
                <Card
                  val={val}
                  name={truthyVal}
                  key={val.id}
                  className={style.card}
                  cat={val.media_type}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Fav;

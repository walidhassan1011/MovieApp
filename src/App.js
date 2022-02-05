import "./App.css";
import * as FaBIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { Component, Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Movies from "./Movies/Movies";
import Details from "./Details/Details";
import Search from "./Search/Search";
import Fav from "./Favorites/Fav";
import Home from "./Home/Home";
import Loading from "./Loading/Loading";
import ProtectedRoute from "./ProtectedRoute";
class App extends Component {
  state = {
    allMovies: [],
    favorites: [],
  };
  onAddToFavoritesHandler = (fav) => {
    this.setState({ favorites: [...fav] });
    console.log(this.state.favorites);
  };
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <ProtectedRoute>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/home"} component={Home} />
              <Route path="/movies">
                <Movies onAddToFavorites={this.onAddToFavoritesHandler} />
              </Route>
              <Route path="/details/:cat/:id" component={Details} />
              <Route path="/search" component={Search} />
              <Route path="/favorites">
                <Fav favorites={this.state.favorites} />
              </Route>
            </ProtectedRoute>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
export default App;

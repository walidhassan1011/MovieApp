import React, { Component } from 'react';
import { Fragment } from 'react';
import axios from 'axios';
import style from '../Details/Details.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Rating from 'react-rating';
import * as BiIcons from 'react-icons/bi'

class Details extends Component {
  baseUrl = 'https://image.tmdb.org/t/p/w500'
  state = {
    itemData:{},
    genres:[],
    productionCompanies:[]
  }
  getDetails = async()=>{
    let id = this.props.match.params.id
    console.log(this.props)
    let itemDetail= await axios.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff");
    // console.log(itemDetail.data)
    this.setState({
      itemData: itemDetail.data,
      genres:itemDetail.data.genres,
      productionCompanies:itemDetail.data.production_companies

    })
    console.log(this.state.itemData)
    console.log(this.state.genres)
  }
  backButtonHandler = ()=>{
    this.props.history.replace("/movies")
  }
  componentDidMount(){
    this.getDetails()
  }
  render() {
    console.log(this.state.genres)
    return <Fragment>
      <div className={style.itemContainer}>
        <div className="row justify-content-space-center">
          <div className=" mt-5 details col-lg-7 p-5 d-flex flex-column justify-content-space-around">
          <h1 className='col-lg-12  display-3 text-white fw-bold pt-5'><BiIcons.BiArrowBack className={style.backArrow} onClick={this.backButtonHandler}/>{this.state.itemData.original_title}</h1>
          <p className='text-white h4 fw-light mx-5 my-3'>{this.state.itemData.release_date}</p>
          <p className='col-lg-12 text-white display-6'>{this.state.itemData.overview}</p>
          
          <ul className={style.list+" mt-5"}>
          <li className={style.genreList}>Rating</li>
          <li><Rating initialRating={this.state.itemData.vote_average/2} readonly emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" className={style.genreList}/></li>
          </ul>
          <ul className={style.list+" mt-5"}>
          <li className={'display-6 '+style.genreList}>Genres: </li>
            {this.state.genres.map((val)=>{
              return <li className={style.genreList} key={val.id}>{val.name}</li>
            })}
          </ul>
          <ul className={style.list+" mt-5"}>
          <li className={'display-6 '+style.genreList}>Production Comapnies: </li>
            {this.state.productionCompanies.map((val)=>{
              return <li className={style.genreList} key={val.id}>{val.name}</li>
            })}
          </ul>
          </div>
        <img className="col-lg-4 img-fluid" src={this.baseUrl+this.state.itemData.poster_path} alt="" />
        </div>
      </div>

    </Fragment>
  }
}

export default Details;
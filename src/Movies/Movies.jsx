import axios from 'axios';
import { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import * as AiIcons from "react-icons/ai";
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css'
import Details from '../Details/Details';
import { Redirect } from 'react-router-dom';
class Movies extends Component {
    baseUrl = 'https://image.tmdb.org/t/p/w500'
    state = {
        allMovies:[],
        title:'Trending Movies',
        favorites:[]
    }
    getMovies = async()=>{
       let {data} = await axios.get('https://api.themoviedb.org/3/trending/movies/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff');
       this.setState({allMovies:data.results,title:'Trending Movies'})
    }
    componentDidMount(){
        this.getMovies();
    }
    getTv = async()=>{
        let {data} = await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff');
        this.setState({allMovies:data.results,title:'Trending Tv Shows'})
        console.log(this.state.allMovies)
    }
    addToFavorites = (args)=>{
        this.setState({favorites:this.state.favorites.push(args)})
    }
    detailsButtonHandler = ()=>{
        
    }
    render() {
        return <Fragment>
            {/*  */}
            <section className='movieHeader col-sm-12'>
                <div className="movieSectionContent col-sm-11 col-md-4">
                <h1 className='headerTitle text-white'>Spider-Man: No Way Home</h1>
                <button className='btn btn-danger fw-bold fs-5 w-50'>Book Now</button>
                </div>
                <div className="icon ">
                {/* <AiIcons.AiFillPlayCircle className='text-white display-1 playBttn'/> */}
                </div>
                <div className="socialMedia d-flex flex-column text-white">
                   <AiIcons.AiOutlineFacebook className='icon'/>
                    <AiIcons.AiOutlineInstagram className='icon'/>
                    <AiIcons.AiOutlineTwitter className='icon'/>
                </div>
            </section>
            <div className="movieContainer">
                <h1 className='text-center title pageTitle my-5'>{this.state.title}</h1>
                <div className="line"></div>
                <select className = "filter" name="" id="" onChange={(e)=>{
                    if(e.target.value === "tv"){this.getTv()}
                    else{this.getMovies()}
                }}>
                    <option value="none" className='text-muted'>Filter By</option>
                    <option value="tv">Tv</option>
                    <option value="movies">Movies</option>
                </select>
            <div className="row p-5">
            {this.state.allMovies.map((value,index)=>{
                    return <div className="col-md-3 col-sm-12 item my-5">
                            <div className="img-container"> 
                            <div className="overlay">
                                <AiIcons.AiFillPlayCircle className='text-danger playBttn'/>
                            </div>  
                            <img src={this.baseUrl+value.poster_path} className='img-fluid' alt="" />
                            </div>
                        <h1 className=' title col-sm-12 itemTitle'>{value.title}</h1>
                        <h1 className=' title col-sm-12 itemTitle'>{value.name}</h1>
                        <div className="row">
                        <h1 className = 'col-sm-12 fw-light text-muted title'>Release Date: {value.release_date}{value.first_air_date}</h1>
                        <span><h1 htmlFor="" className='text-muted fw-light title'>Rating: <Rating initialRating={value.vote_average/2} readonly emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" stop={5} className='text-muted rating col-md-7'/>
                        <AiIcons.AiFillHeart className='heart' onClick={()=>{
                            this.addToFavorites(value)
                            console.log(this.state.favorites)
                        }}/></h1></span>
                        </div>
                        <Link className='btn btn-danger detailsBttn'  to = {"/details/"+value.id}>Details</Link>  

                    </div>
                })}
                    </div>

            </div>
        </Fragment>
    }
}

export default Movies;
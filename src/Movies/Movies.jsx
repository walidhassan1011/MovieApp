import axios from 'axios';
import { Component, Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import * as AiIcons from "react-icons/ai";
import * as BiIcons from 'react-icons/bi'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css'
import Details from '../Details/Details';
import { Redirect } from 'react-router-dom';
import style from '../Movies/Movies.module.css'
// import { withRouter } from 'react-router'
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
    detailsButtonHandler = (id)=>{
        this.props.history.push("/details/"+id)
    }
    render() {
        console.log(this.props)
        return <Fragment>
            
            
            <section className={style.movieHeader+ ' col-sm-12'}>
                <div className={style.movieSectionContent+" p-5 container col-sm-11 col-md-4"}>
                <h1 className={style.headerTitle+' text-white mb-3'}>The Meg</h1>
                <button className='btn btn-danger fw-bold fs-5 w-50 my-5'>Book Now</button>
                </div>
                <div className={style.icon}>
                {/* <AiIcons.AiFillPlayCircle className='text-white display-1 playBttn'/> */}
                </div>
                <div className={style.socialMedia+" d-flex flex-column text-white"}>
                   <AiIcons.AiOutlineFacebook className={style.icon}/>
                    <AiIcons.AiOutlineInstagram className={style.icon}/>
                    <AiIcons.AiOutlineTwitter className={style.icon}/>
                </div>
            </section>
            <div className={style.movieContainer}>
                <h1 className={style.pageTitle+' text-center title  my-5'}> <BiIcons.BiTrendingUp/> {this.state.title}</h1>
                <div className={style.line}></div>
                <select className = {style.filter} name="" id="" onChange={(e)=>{
                    if(e.target.value === "tv"){this.getTv()}
                    else{this.getMovies()}
                }}>
                    <option value="none" className='text-muted'>Filter By</option>
                    <option value="tv">Tv</option>
                    <option value="movies">Movies</option>
                </select>
            <div className="row p-5">
            {this.state.allMovies.map((value,index)=>{
                    return <div className={"col-md-3 col-sm-12  my-5 "+style.item}>
                            <div className={style.imgContainer}> 
                            <div className={style.overlay} onClick={()=>{
                                this.detailsButtonHandler(value.id)
                            }}>
                                <AiIcons.AiFillPlayCircle className={style. playBttn+' text-danger'}/>
                            </div>  
                            <img src={this.baseUrl+value.poster_path} className='img-fluid' alt="" />
                            </div>
                        <h1 className={style.title+' col-sm-12 '+style.itemTitle}>{value.title}</h1>
                        <h1 className={style.title+' col-sm-12 '+style.itemTitle}>{value.name}</h1>
                        <div className="row">
                        <h1 className = {'col-sm-12 fw-light text-muted '+style.title}>Release Date: {value.release_date}{value.first_air_date}</h1>
                        <span><h1 htmlFor="" className={'text-muted fw-light '+style.title}>Rating: <Rating initialRating={value.vote_average/2} readonly emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" stop={5} className={'text-muted col-md-7 '+style.rating}/>
                        <AiIcons.AiFillHeart className={style.heart} onClick={()=>{
                            this.addToFavorites(value)
                            console.log(this.state.favorites)
                        }}/></h1></span>
                        </div>
                        <Link className={'btn btn-danger '+style.detailsBttn}  to = {"/details/"+value.id}>Details</Link>  

                    </div>
                })}
                    </div>

            </div>
        </Fragment>
    }
}

export default Movies;
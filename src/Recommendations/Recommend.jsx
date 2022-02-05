import axios from 'axios';
import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
class Recommend extends Component {
    baseUrl = 'https://image.tmdb.org/t/p/w500'
    state = {
        recommednations:[],
        recommendationText:''
    }
    getRecommendations = async()=>{
        let itemId = this.props.id;
        let itemCategory = this.props.cat
        console.log(this.props)
        let {data} = await axios.get("https://api.themoviedb.org/3/"+itemCategory+"/"+itemId+"/recommendations?api_key=bdd10d2b8f52bc0a5320d5c9d88bd1ff&language=en-US&page=1")
        // console.log(typeof(data.results))
        if(data.results.length == 0)
        {
            console.log("empty array")
            this.setState({recommendationText:'No Recommendations Yet'})
        }
        else{
            console.log("not empty")
            this.setState({recommednations:data.results,recommendationText:'Recommendations:'})
        }   
    }
    componentDidMount(){
        this.getRecommendations();
    }
    render() {
        return <Fragment>
            <div className="container mt-5">
            <div className="row p-3">
            <h1 className='text-white mt-5'>{this.state.recommendationText}</h1>
           {this.state.recommednations.map((val)=>{
            let truthyVal = val.name || val.original_title || val.title
               return <Card val = {val} name = {truthyVal} comp = {"recommend"} key={val.id}/>
           })}
</div></div>
        </Fragment>
    }
}

export default Recommend;
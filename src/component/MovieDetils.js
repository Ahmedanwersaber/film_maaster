import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link ,useParams} from 'react-router-dom'

const MovieDetils=()=> {
   const parmas= useParams();
  const[movie,setmove] =useState([])
   console.log(parmas.id);
     //get all moves by axios 
const getMovieDetils= async()=>{

    const res=await axios.get(`https://api.themoviedb.org/3/movie/${parmas.id}?api_key=c4f4fc9310c86e731ec98effdcc4f63e&&language=ar`)
    setmove(res.data);
    console.log(res.data);
   }

   useEffect(()=>{
    getMovieDetils();
   },[])

  return (
    <div>
    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
            <div className="card-detalis  d-flex align-items-center ">
                <img
                    className="img-movie w-30"
                    src={`https://image.tmdb.org/t/p/w500/`+movie.backdrop_path}
                    alt="ascad"
                />
                <div className="justify-content-center text-center  mx-auto">
                    <p className="card-text-details border-bottom">
                        اسم الفيلم:{movie.title}
                    </p>
                    <p className="card-text-details border-bottom">
                        تاريخ الفيلم :{movie.release_date}
                    </p>
                    <p className="card-text-details border-bottom">
                        عدد المقيمين : {movie.vote_count}
                    </p>
                    <p className="card-text-details border-bottom">
                        التقييم :{movie.vote_average}
                    </p>
                </div>
            </div>
        </Col>
    </Row>

    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
            <div className="card-story  d-flex flex-column align-items-start">
                <div className="text-end p-4 ">
                    <p className="card-text-title border-bottom">القصة:{movie.overview}</p>
                </div>
                <div className="text-end px-2">
                    <p className="card-text-story"></p>
                </div>
            </div>
        </Col>
    </Row>
    <Row className="justify-content-center">
        <Col
            md="10"
            xs="12"
            sm="12"
            className="mt-2 d-flex justify-content-center ">
            <Link to="/">
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" , margin:"15px"}}
                    className="btn btn-primary mx-2">
                    عوده للرئيسيه
                </button>
            </Link>
            <a href={movie.homepage} >
                <button
                    style={{ backgroundColor: "#b45b35", border: "none", margin:"15px" }}
                    className="btn btn-primary">
                    مشاهده الفيلم
                </button>
            </a>
        </Col>
    </Row>
</div>
  )
}

export default MovieDetils

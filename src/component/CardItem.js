import React from 'react'
import { Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardItem=({mov})=> {
    return(
        <div className='row row-cols-3 g-3'>
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
   <Link to={`/movie/${mov.id}`}>
      <div className="card">
        <img src={`https://image.tmdb.org/t/p/w500/`+mov.poster_path} className="card__image" alt="Not Found" />
        <div className="card__overlay">
          <div className="overlay__text text-center w-100 p-2 ">
            <p>اسم الفيلم :{mov.original_title} </p>
            <p>تاريخ الاصدار: {mov.release_date}</p>
            <p>عدد المقيمين: {mov.vote_count}</p>
            <p>التقييم:{mov.vote_average} </p>
          </div>
        </div>
      </div>
    </Link>
  </Col >
  </div>
)
}

export default CardItem

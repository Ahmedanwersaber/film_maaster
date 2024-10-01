import React, { useEffect, useState } from 'react'
import CardItem from './CardItem';
import { Row } from 'react-bootstrap';
import PaginationList from './paginitionList';
import { useDispatch, useSelector } from 'react-redux';
import {getAllMovie} from '../redux/action/getAllMovie'

const Movelist=({getPage,pageCount})=> {

  const [movies, setmovies] = useState([])


const dispatch=useDispatch();

useEffect(()=>{
  dispatch(getAllMovie());
  },[])

  const dataMovie = useSelector(state => state.movies);

useEffect(()=>{
  setmovies(dataMovie);
   },[dataMovie])

  return (
    
    <Row className='mt-2 row row-cols-4 g-3 p-3'>
       {movies.length >= 1 ? (movies.map((mov) => {
        return (<CardItem key={mov.id} mov={mov} />)
      })) : <h2 className="text-center p-5">لا يوجد افلام...</h2>}


<PaginationList getPage={getPage} pageCount={pageCount}/>
    </Row>
  )
}

export default Movelist

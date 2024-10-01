import React from 'react'
import CardItem from './CardItem';
import { Row } from 'react-bootstrap';
import PaginationList from './paginitionList';


const ListFav=({movies,getPage,pageCount})=> {
  return (
    <>
        

    <Row className='mt-2 row row-cols-4 g-3 p-3'>
      {movies.length >=1 ?(movies.map((mov)=>{
     

  return(<CardItem key={mov.id} mov={mov}/>)
      })):<h2 className='not-found'>لا يوجد افلام </h2>}


<PaginationList getPage={getPage} pageCount={pageCount}/>
    </Row>
    </>
  )
}

export default ListFav

import { ClassNames } from '@emotion/react';
import {Pagination} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getMoviePage } from '../redux/action/getAllMovie';
import { useEffect, useState } from 'react';
function PaginationList() {

const [pageCount, setpageCount] = useState(0);

 const dispatch = useDispatch()
 const pages = useSelector(state => state.pageCount);
 useEffect(() => {
 
  setpageCount(pages)

 }, [])



    //get page of movies 
  const getPage= async(page)=>{
    dispatch(getMoviePage(page))

   }
   
    const handlePageClick=(data)=>{
      getPage(data.selected+1)

    }
      


  


  return (
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالى "
    onPageChange={handlePageClick}
    marginPagesDisplayed={2}
    pageRangeDisplayed={2}
    pageCount={pageCount}
    previousLabel="السابق "
    className='pagination mr-50%'
    containerClassName={"pagination align-item-center p-3"}
    pageClassName={"page-item"}
    pageLinkClassName={"page-link"}
    previousClassName={"page-item"}
    nextClassName={"page-item"}
    previousLinkClassName={"page-link"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-link"}
    activeClassName={"active"}
    
  />
  );
}

export default PaginationList;
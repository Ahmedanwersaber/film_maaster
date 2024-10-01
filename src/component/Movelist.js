import React, { useEffect, useState } from 'react';
import CardItem from './CardItem';
import { Row } from 'react-bootstrap';
import PaginationList from './paginitionList';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovie } from '../redux/action/getAllMovie';

const Movelist = ({ getPage, pageCount }) => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  // Fetch movies on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        await dispatch(getAllMovie());
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };
    fetchMovies();
  }, [dispatch]);

  const dataMovie = useSelector(state => state.movies);

  // Update movies state when dataMovie changes
  useEffect(() => {
    if (Array.isArray(dataMovie)) {
      setMovies(dataMovie);
    } else {
      console.warn('Expected dataMovie to be an array, got:', dataMovie);
    }
  }, [dataMovie]);

  return (
    <Row className='mt-2 row row-cols-4 g-3 p-3'>
      {movies.length > 0 ? (
        movies.map((mov) => <CardItem key={mov.id} mov={mov} />)
      ) : (
        <h2 className="text-center p-5">لا يوجد افلام...</h2>
      )}
      <PaginationList getPage={getPage} pageCount={pageCount} />
    </Row>
  );
};

export default Movelist;

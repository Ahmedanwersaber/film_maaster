import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import logo from '../imags/logo.svg'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllMovie,getMovieSearch } from '../redux/action/getAllMovie';
function NavScrollExample() {
  const OnSearch=(word)=>{
    search(word)
  }
  const [movies, setmovies] = useState([])
  const [pageCount, setpageCount] = useState(0);
const dispatch=useDispatch();
const search= async(word)=>{
  if(word===""){
    dispatch( getAllMovie());
  }else{
    dispatch(getMovieSearch(word));
  }

}

  return (
    <Row >
      
    <Navbar style={{position: "sticky" ,sticky:"top",fixed:'top'}} expand="lg" className=".bg-dark-subtle px-3 nav" bg="dark" variant='dark' >
      <Container >
        <Navbar.Brand href="#"><h2>MOVIE<span className='iconLetter'>S</span><img src={logo} width={'35px'} /></h2> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           <Nav className="me-auto m-3 nav-heder">
           
           <Nav.Link href="/">Home</Nav.Link>
           
            <Nav.Link href="/movie/fav">Movie list</Nav.Link>
           
           
          </Nav>+

          </Nav>
          <Form className="d-flex">
            <Form.Control onChange={(e)=>OnSearch(e.target.value)} type="text" placeholder="ابحث"  className="mx-2"/>
            <Button className="btn-search">بحث</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </Row>
  );
}

export default NavScrollExample;
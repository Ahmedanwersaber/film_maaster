import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavScrollExample from './component/Navbar'
import TestBody from './component/bodyII';
import HeaderItem from './component/HeaderItem';
import { Container } from 'react-bootstrap';
import Movelist from './component/Movelist';
import MovieDetils from './component/MovieDetils';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import ListFav from './component/ListFav'

function App() {



//to search in movie list 

  return (
    <div className="App">
     <NavScrollExample /> 
     
     <TestBody/>
<Container>
    <HeaderItem/>
  <BrowserRouter>
  <Routes>
    
    <Route path='/' element={ <Movelist  />}/>
    
   <Route path='/movie/:id' element={<MovieDetils/>}/>
   <Route path='/movie/fav' element={<ListFav  />}/>


</Routes>
</BrowserRouter>
</Container>
    </div>
  );
}

export default App;

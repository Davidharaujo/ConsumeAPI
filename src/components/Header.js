import React, { Component } from 'react'
import Home from '../services/home'
import Movies from '../services/movies'
import Series from '../services/series'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Logo from '../img/logo.png'
import * as S from '../styles/style.js'

export default class Header extends Component {

  render() {
    return (
      <S.Navigation>
        <img className='logo' src={Logo} alt='logo'></img>
        <BrowserRouter>
            <ul>
                <li><Link to='/'>
                Home
                </Link></li>
                <li><Link to='/filmes'>
                Filmes Populares
                </Link></li>
                <li><Link to='/series'>
                Séries em Alta
                </Link></li>
            </ul>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/filmes' element={<Movies />}/>
                <Route path='/series' element={<Series />}/>
            </Routes>
        </BrowserRouter>
      </S.Navigation>
    )
  }
}


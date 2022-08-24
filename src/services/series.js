import React, { Component } from 'react'
import axios from 'axios'
import * as S from '../styles/style.js'
import like from '../img/like.png'
import plus from '../img/plus.png'

const SeriesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/tv/popular?api_key=78190b97598478d0062266b383e1294d&language=pt-BR&page=1'
})


export default class Series extends Component {
  state = {
    series: [],
    filterSeries:[]
  }

  componentDidMount(){
    this.getSeries()
  }

  getSeries = async () => {
    const resposta = await SeriesApi.get()

    const allSeries = resposta.data.results.map((item) => {
      return {
        ...item,
        imagem: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
        imgCaixa: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
      }
    })
    this.setState({
      series:allSeries,
      filterSeries:allSeries
    })
    console.log(resposta)
  }
  handleChange= (event) =>{
    const ListaFiltrada = this.state.series.filter((item) =>{
      if(item.original_name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(event.target.value.toLowerCase())){
        return true
      } else{
        return ''
      }
    })
    this.setState({
      filterSeries:ListaFiltrada,

    })
  }

  render() {
    return (
      <S.Container>
        <S.CaixaPesquisa>
          <input type='search' placeholder='Buscar' onChange={this.handleChange}/>
        </S.CaixaPesquisa>
        <S.Caixa>
            {this.state.filterSeries.map((item,index)=>(
                <S.CaixaFilme key={index}>
                  <figure>
                    <S.Poster src={item.imagem} alt='posters'/>
                    <figcaption>{item.vote_average}</figcaption>
                  </figure>
                  <div>
                  <S.ImgCaixa src={item.imgCaixa} alt="" />
                  <button><img src={plus} alt="" /></button>
                  <button><img src={like} alt="" /></button>
                    <h3>{item.original_name}</h3>
                    <p>{item.overview}</p>
                  </div>
                </S.CaixaFilme>
            ))}
            </S.Caixa>
      </S.Container>
      
    )
  }
}

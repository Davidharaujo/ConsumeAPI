import React,{Component} from 'react'
import axios from 'axios'
import * as S from '../styles/style.js'
import like from '../img/like.png'
import plus from '../img/plus.png'

const FilmesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=78190b97598478d0062266b383e1294d&language=pt-BR&page=1'
})

// const TrailersApi = axios.create({
//   baseURL: `https://api.themoviedb.org/3/movie/${FilmesApi.get().data.results.id}/videos?api_key=78190b97598478d0062266b383e1294d&append_to_response=videos`
// })

export default class Movies extends Component{
    state = {
        movies:[],
        trailers:[],
        filterMovies:[]
      }
    
      componentDidMount(){
        this.getMovies()
      }
    
      getMovies = async () => {
        const resposta = await FilmesApi.get()

        const allFilmes = resposta.data.results.map((item) => {
            return {
                ...item,
                imagem:`https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                imgCaixa: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`
            }
        })
        this.setState({
            movies:allFilmes,
            filterMovies:allFilmes
        })
        console.log(resposta)
      }
      // getTrailers = async () => {
      //   const resposta = await TrailersApi.get()

      //   const allTrailers = resposta.data.videos.results.map((item) => {
      //       return {
      //           ...item,
      //           trailer:`https://www.youtube.com/watch?v=${item.id}`
      //       }
      //   })
      //   this.setState({
      //       trailers:allTrailers
      //   })
      //   console.log(resposta)
      // }

      handleChange= (event) =>{
        const ListaFiltrada = this.state.movies.filter((item) =>{
          if(item.original_title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(event.target.value.toLowerCase())){
            return true
          } else{
            return ''
          }
        })
        this.setState({
          filterMovies:ListaFiltrada
        })
      }
    render(){
        return (
            <S.Container>
              <S.CaixaPesquisa>
                <input type='search' placeholder='Buscar' onChange={this.handleChange}/>
              </S.CaixaPesquisa>
                
                <S.Caixa>
                {this.state.filterMovies.map((item,index)=>(
                    <S.CaixaFilme key={index}>
                        <figure>
                          <S.Poster src={item.imagem} alt='posters'/>
                          <figcaption>{item.vote_average}</figcaption>
                        </figure>
                        <div>
                          <S.ImgCaixa src={item.imgCaixa} alt="" />
                          <button><img src={plus} alt="" /></button>
                          <button><img src={like} alt="" /></button>
                          <h3>{item.title}</h3>
                          <p>{item.overview}</p>
                        </div>
                    </S.CaixaFilme>
                ))}
                </S.Caixa>
            </S.Container>
        )
    }
}
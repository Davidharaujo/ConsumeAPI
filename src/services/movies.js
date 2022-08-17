import React,{Component} from 'react'
import axios from 'axios'

const FilmesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=78190b97598478d0062266b383e1294d&language=pt-BR&page=1'
})

export default class Movies extends Component{
    state = {
        movies:[]
      }
    
      componentDidMount(){
        this.getMovies()
      }
    
      getMovies = async () => {
        const resposta = await FilmesApi.get()

        const allFilmes = resposta.data.results.map((item) => {
            return {
                ...item,
                nome:item.original_title
            }
        })
        this.setState({
            movies:allFilmes
        })
        console.log(resposta)
      }
    render(){
        return (
            <>
            {this.state.movies.map((item,index)=>(
                <ul key={index}>
                    <li>{item.nome}</li>
                    <li>{item.overview}</li>
                    <img src={item.poster_path}></img>
                </ul>
            ))}
            </>
        )
    }
}
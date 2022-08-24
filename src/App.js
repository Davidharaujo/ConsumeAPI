import React,{Component} from 'react'
import Header from './components/Header.js'
import * as S from './styles/style.js'

export default class Movies extends Component{
  render(){
      return (
        <S.Container>
          <S.GlobalStyle/>
          <Header />
        </S.Container>
      )
  }
}

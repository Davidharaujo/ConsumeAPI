import React, { Component } from 'react'
import styled,{ createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    color: white;
  }
  body {
    background-color: #003049;
    font-family: 'Quicksand', sans-serif;
  }
`

export const Container = styled.section `
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .logo{
    width: 200px;
  }

  input {
    width: 200px;
    height: 5vh;
    margin-bottom: 50px;
    background-color: #fdf0d5;
    border: none;
    border-radius: 10px;
    text-align: center;
  }

`
export const CaixaPesquisa = styled.div `
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Navigation = styled.nav `
  height: 300px;
  width: 100%;
  display: flex;
  padding-top:20px ;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  ul {
    display: flex;
    width: 40%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  li{
    list-style: none;
    text-decoration:none;
    width: 25%;
    display: flex;
    justify-content: center;
  }

`
export const Caixa = styled.div `
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 85%;
  height: 100%;
`

export const CaixaFilme = styled.div `
  display: flex;
  position: relative;
  width: 25%;
  margin: 10px;
  cursor: pointer;

  figcaption{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 3;
    top: -39px;
    background-color: #669bbc;
    color: #fff;
    font-weight: bold;
    width: 35px;
    height: 35px;
    border-radius: 10px;
  }

  &:hover figure{
    visibility: hidden;
  }

  div{
    position: absolute;
    z-index: 1;
    width: 300px;
    height: 450px;
    transition: 500ms;
    background-color: #669bbc;
    border-radius: 10px;
    font-size: 13px;
    padding: 10px;
  }
  
  &:hover div{
    z-index: 4;
    transform: scale(1.2)
  }

  div h3 {
    color: #000;
  }

  div p {
    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 11; // Quantidade de linhas
    -webkit-box-orient: vertical; 
    color: #000;
  }

  button {
    border-radius: 100%;
    background-color:#669bbc;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
  }

  button img {
    width: 20px;
    height: 20px;
  }

`
export const ImgCaixa = styled.img `
  width: 280px;
  height: 25vh;
  display: flex;
  justify-content: center;
`

export const Poster = styled.img `
    width: 300px;
    height: 100%;
    position: relative;
    z-index: 2;
    border-radius: 10px;
`

export default class style extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

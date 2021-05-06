import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchText: "",
  }
  

  componentDidMount() {
    const postRequest = { // this is only important to memorize
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    }

    fetch("http://localhost:3000/pokemon/") //fetch request
    .then(resp => resp.json())
    .then(pokemonObj => 
      this.setState({pokemon: pokemonObj})) // this is the part that's important
  }


  searchForm = (search) => {
  // debugger
  this.setState({
    searchText: search 
  })
  }

addPokemon = (pokeDataObj) =>{
  
  let newPokemon = {
    name: pokeDataObj.name,
    hp: pokeDataObj.hp,
    sprites: {
      frontUrl: pokeDataObj.frontUrl,
      backUrl: pokeDataObj.backUrl,
    }}
      // this.setState({
      //   pokemon: [...this.state.pokemon, newPokemon]
      // })
     
      
      fetch("http://localhost:3000/pokemon/"), {
          method: 'POST',
          headers:  {"Content-Type": "application/json" },
          body: JSON.stringify(newPokemon)
  
          .then(resp => resp.json())
          .then(newPoke => 
            this.setState({
                pokemon: [newPoke, ...this.state.pokemon]
              }))
          }
          
        }




  render() {
    let displayPokemon = this.state.pokemon.filter(pokeObj => pokeObj.name.toLowerCase().startsWith(this.state.searchText.toLowerCase()))

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search searchForm={this.searchForm}/>
        <br />
        <PokemonCollection pokemon={displayPokemon} />
      </Container>
    )
  }
}

export default PokemonPage

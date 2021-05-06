import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    display: false
  }
  toggleCard = (pokeObj) => {
    // debugger
    this.setState({
      display : !this.state.display


    })
  }


  
  
  render() {
    return (
      <Card onClick={() => this.toggleCard(this.props.pokeman)}>
        <div>
          <div className="image">
            <img src={
              this.state.display ?
              this.props.pokeman.sprites.back :
              this.props.pokeman.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokeman.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokeman.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

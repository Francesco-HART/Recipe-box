import React, { Component } from 'react'

//Components
import Header from "./components/Header";
import Admin from "./components/Admin";
import Card from './components/Card.js'

//API
import recettes from './recettes'
// CSS
import './App.css'


class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
      recettes: {}
  }
    handleCharge= () => this.setState({recettes})

  render () {
      const carte = Object.keys(this.state.recettes).map(key => <Card key= {key} details={this.state.recettes[key]} /> )
    return (
        <div className='box'>
            <Header
                pseudo={this.state.pseudo}/>
                <div className='cards'>
                    {carte}
                  </div>
            <Admin chargeRecettes={this.handleCharge}/>
         </div>
    )
  }
}

export default App

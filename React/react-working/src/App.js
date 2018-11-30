import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters:[
      {
        'name': 'taokun',
        'job': 'FE'
      }, {
        'name': 'taokun1',
        'job': 'FE'
      }, {
        'name': 'taokun2',
        'job': 'FE'
      }

    ]
  }
  componentDidMount(){
    const url='https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
    fetch(url)
      .then(result => result.json())
      .then(result =>{
        this.setState({
          data:result
        })
      })
  }
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table characterData={characters} 
               removeCharacter={this.removeCharacter}
         />
         <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
  removeCharacter = index =>{
    const {characters} = this.state;
    this.setState({
      characters:characters.filter(
        (character,i)=>{
          return i !== index;
        }
      )
    })
  }
  handleSubmit = character =>{
    this.setState({
      characters:[character,...this.state.characters]
    })
  }
}

export default App;

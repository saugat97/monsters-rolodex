import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters:[],
      searchField: ''
    };
  }

  handleChange = (event) => {
   this.setState({searchField: event.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render(){
    //destructure: pulls property from object and sets them to const
    const { monsters, searchField} = this.state;
    const filetredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        {/* Pass in monsters as props */}
        <CardList monsters={filetredMonsters} />           
      </div>
    );
  }
}

export default App;

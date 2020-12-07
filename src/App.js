import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: ''
    };
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters:users}));
}

  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monsters => 
      monsters.name.toLowerCase().includes(searchFeild.toLowerCase())
    );

    return (
  <div className="App">
  <h1>Monsters Rolodex</h1>
    <SearchBox 
      placeholder = "Search monsters"
      handleChange = {
        e => this.setState({ searchFeild: e.target.value}) 
      }
    />
    <CardList monsters={filteredMonsters} />
     
  </div>

    )
  }
}


export default App;

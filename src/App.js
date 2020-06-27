import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {

  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: ''
    };
  }

  componentDidMount() {
    // const url = 'http://localhost:8080/ords/hr/school-v1/xxrad_log_reg/?p_institution_code=FIRST&p_username=FIRST&p_password=$2a$12$tnib7cYlL.gxOwjhcVvkHOzyvCzi8riCs9ZFmkpf0KbDKDQunQeyW';
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ monster: data }))
    // .then(data =>  this.setState({ monster : data.items}))
  }

  handleChange = e =>  { 
    this.setState({ searchField: e.target.value }); 
  };

  render() {
    const { monster, searchField } = this.state;
    const filterMonster = monster.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1>Monster App</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange= {this.handleChange}
        />
        <CardList monsters={filterMonster}>
        </CardList>
      </div>
    );
  }

}

export default App;

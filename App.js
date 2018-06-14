import React, { Component } from 'react';
import './App.css';
import DisplayList from './containers/DisplayList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameToSearch: "",
      arrayData: [],
      selectOptionFilter: '',
    }
  }

  showData = () => {
    this.getUserData();
  }


  getUserData() {
    var nameToSearch = this.state.nameToSearch;
    if (nameToSearch)
      fetch(' https://api.github.com/search/users?q=' + nameToSearch)
        .then(response => response.json())
        .then(arrayData => this.setState({ arrayData }, function () { console.log("data >>>", this.state.arrayData, " length of items", Object.keys(this.state.arrayData.items).length) }))
        .catch(e => e)
    else { console.log("enter some value") }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
    if ((event.target.name !== 'nameToSearch') && (this.state.arrayData.length !== 0) && (this.state.selectOptionFilter !== ''))
      this.sortByEvent(event.target.value)
  }

  sortByEvent(e) {
    var newSortedArray = this.state.arrayData.items;
    switch (e) {
      case "Name_asc":
        newSortedArray.sort(function (a, b) { return a.login - b.login });
        break;
      case "Name_dec":
        newSortedArray.sort(function (a, b) { return b.login - a.login });
        break;
      case "Rank_asc":
        newSortedArray.sort(function (a, b) { return a.score - b.score });
        break;
      case "Rank_dec":
        newSortedArray.sort(function (a, b) { return b.score - a.score });
        break;
      default:
        break;
    }
  }



  render() {
    const posts = this.state.arrayData.items;
    return (
      <div className="App">
        <div>
          <input type="text" name="nameToSearch" placeholder="Search" onChange={this.handleChange.bind(this)} />
          <div>
            <span>Filter &#x21C5;</span>

            <select name="selectOptionFilter" value={this.state.selectOptionFilter} onChange={this.handleChange.bind(this)}>
              <option value="Name_asc">Name &#8613;</option>
              <option value="Name_dec">Name &#8615;</option>
              <option value="Rank_asc">Rank &#8613;</option>
              <option value="Rank_dec">Rank &#8615;</option>
            </select><br />
            <button onClick={() => this.showData()}>show data</button>
          </div>
        </div>
        {posts && <DisplayList post={posts} arrayData={this.state.arrayData.items} /> }

      </div>
    );
  }
}

export default App;

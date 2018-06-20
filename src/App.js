import React, { Component } from 'react';
import './App.css';
import DisplayList from './containers/DisplayList';
// import {SearchUrl} from './containers/SearchUrl';
import Filter from './containers/Filters';
import SearchBar from './containers/SearchBar';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameToSearch: "",
      arrayData: [],
      sholudCheck: false,
    }
    this.sortByEvent = this.sortByEvent.bind(this);
  }

  getUserData() {
    console.log("sholudCheck", this.state.sholudCheck);

    this.state.sholudCheck ?
      fetch(url + this.state.nameToSearch)
        .then(response => response.json())
        .then(arrayData => this.setState({ arrayData }, function () { console.log("data>", this.state.arrayData) }))
        .then(this.setState({ sholudCheck: false }))
        .catch(e => e)
      : console.log("empty or repeated value")
  }

  handleChangeName(event) {
    var shdchk = true;
    if (this.state.nameToSearch === event.target.value) { shdchk = false }
    this.setState({ nameToSearch: event.target.value, sholudCheck: shdchk })
  }


  sortByEvent(e) {
    if (this.state.arrayData) {
      var newSortedArray = this.state.arrayData.items;
      var filterBy = JSON.parse(e.target.value);
      newSortedArray.sort(function (a, b) { return filterBy.order === "asc" ? a[filterBy.key] - b[filterBy.key] : b[filterBy.key] - a[filterBy.key] });
      this.setState({
        newSortedArray: newSortedArray
      })
    }
  }



  render() {
    const posts = this.state.arrayData.items;

    return (
      <div className="App">
        <SearchBar onChange={this.handleChangeName.bind(this)} onClick={() => this.getUserData()} />
        <Filter onChange={this.sortByEvent.bind(this)} />
        {posts && <DisplayList post={posts} arrayDataCount={this.state.arrayData.total_count} />}
      </div>
    );
  }
}


export default App;
const url = 'https://api.github.com/search/users?q=';
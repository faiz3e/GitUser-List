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
    this.sortByEvent=this.sortByEvent.bind(this);
  }
  
  showData = () => {
    this.getUserData();
  }

  getUserData() {
    this.state.nameToSearch ?
      fetch(' https://api.github.com/search/users?q=' + this.state.nameToSearch)
        .then(response => response.json())
        .then(arrayData => this.setState({ arrayData }, function () {console.log("data>",this.state.arrayData)}))
        .catch(e => e)
    : console.log("enter some value") 
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  sortByEvent(e) {
    if(this.state.arrayData){
      var newSortedArray = this.state.arrayData.items;
      var filterBy= JSON.parse(e.target.value);
      newSortedArray.sort(function (a, b) {  return filterBy.order==="asc"?  a[filterBy.key] - b[filterBy.key] : b[filterBy.key] - a[filterBy.key] });
      this.setState({
      newSortedArray:newSortedArray
      })
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

            <select name="selectOptionFilter" value={this.state.selectOptionFilter.key} onChange={this.sortByEvent.bind(this)}>
              <option value='{ "key":"login", "order":"asc"}'>Name &#8613;</option>
              <option value='{ "key":"login", "order":"dec"}'>Name &#8615;</option>
              <option value='{ "key":"score", "order":"asc"}'>Rank &#8613;</option>
              <option value='{ "key":"score", "order":"dec"}'>Rank &#8615;</option>
            </select><br />
            <button onClick={() => this.showData()}>show data</button>
          </div>
        </div>
        {posts && <DisplayList post={posts} arrayDataCount={this.state.arrayData.total_count} /> }

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import DisplayList from './containers/DisplayList';
import {SearchUrl} from './containers/SearchUrl';
import Filter from './containers/Filters';
import SearchBar from './containers/SearchBar';
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
  
   getUserData() {
    this.state.nameToSearch ?
      fetch(url + this.state.nameToSearch)
        .then(response => response.json())
        .then(arrayData => this.setState({ arrayData }, function () {console.log("data>",this.state.arrayData)}))
        .catch(e => e)
    : console.log("enter some value") 
    // var dataFromurl =  SearchUrl(url,this.state.nameToSearch);
    //   console.log(dataFromurl,"datafrom url");
    //   this.setState({
    //     arrayData:dataFromurl
    //   })
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
          <SearchBar onChange={this.handleChange.bind(this)} onClick={() => this.getUserData()}/>
          <Filter value ={this.state.selectOptionFilter.key}  onChange={this.sortByEvent.bind(this)}/>
          {posts && <DisplayList post={posts} arrayDataCount={this.state.arrayData.total_count} /> }
      </div>
    );
  }
}


export default App;
const url ='https://api.github.com/search/users?q=';
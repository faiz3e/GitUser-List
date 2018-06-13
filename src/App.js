import React, { Component } from 'react';
// import TimeAgo from 'javascript-time-ago'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nameToSearch: "",
      arrayData: [],
      showMoreToggle: false,
      additionalData: [],
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
  }

  showmore(id, url) {
    if (this.state.showMoreToggle == id) { id = ""; }
    this.setState({ showMoreToggle: id }, function () {
      console.log("button on ", this.state.showMoreToggle);
      this.fetchMore(url);

    })

  }
  fetchMore(url) {
    console.log("url", url);
    fetch(url)
      .then(response => response.json())
      .then(additionalData => this.setState({ additionalData }, function () { console.log("additional data >>>", this.state.additionalData) }))
      .catch(e => e)

  }

  render() {
    const posts = this.state.arrayData.items;
    return (
      <div className="App">
        <div>
          <input type="text" name="nameToSearch" placeholder="Search" onChange={this.handleChange.bind(this)} />
          <div>
            <span>Filter &#x21C5;</span>

            <select name="selectOptionValue" value={this.state.selectOptionValue} onChange={this.handleChange.bind(this)}>
              <option value="Name_asc">Name &#8613;</option>
              <option value="Name_dec">Name &#8615;</option>
              <option value="Rank_asc">Rank &#8613;</option>
              <option value="Rank_dec">Rank &#8615;</option>
            </select><br />
            <button onClick={() => this.showData()}>show data</button>
          </div>
        </div>
        {posts && <div>
          <div>
            <p>No of Records showing:{Object.keys(posts).length} of {this.state.arrayData.total_count} </p>
          </div>
          <ul className="ul-style">
            {posts.map((post) =>
              <li className="card" key={post.id}>
                <img className="avatar-style" src={post.avatar_url} alt="avatar" />
                <h2> {post.login}</h2>
                <a href={post.html_url} className="title">{post.html_url}</a>
                <p>Score:{post.score}</p>
                <p><button className="loadMoreButton" onClick={this.showmore.bind(this, post.id, post.url)}>{this.state.showMoreToggle == post.id ? <span>Show less</span> : <span>Show more</span>}</button></p>
                {this.state.showMoreToggle == post.id && <div className="additional-style">
                  <p>created at: {this.state.additionalData.created_at}</p>
                  <p>followers: {this.state.additionalData.followers}</p>
                  <p>public repos: {this.state.additionalData.public_repos}</p>
                  <p>{this.state.additionalData.location}</p>


                </div>
                }
              </li>)}
          </ul>
        </div>}
      </div>
    );
  }
}

export default App;

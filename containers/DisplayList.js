import React, { Component } from 'react';

export default class DisplayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
          showMoreToggle: false,
          additionalData: [],
        }
      }
      fetchMore(url) {
        console.log("url", url);
        fetch(url)
          .then(response => response.json())
          .then(additionalData => this.setState({ additionalData }, function () { console.log("additional data >>>", this.state.additionalData) }))
          .catch(e => e)
      }
    
      showmore(id, url) {
        if (this.state.showMoreToggle === id) { id = "" }
        this.setState({ showMoreToggle: id }, function () {
          console.log("button on ", this.state.showMoreToggle);
          this.fetchMore(url);
    
        })
    
      }
  render() {
    var posts = this.props.post;
	var arrayData = this.props.arrayData;
	return (
      <div className = "">
		  <div>
            <div>
              <p>No of Records showing:{Object.keys(posts).length} of {arrayData.total_count} </p>
            </div>
            <ul className="ul-style">
              {posts.map((post) =>
                <li className="w3-card-4 li-style" style={{width:"30%" , marginBottom:"20px"}} key={post.id}>
                <header className="w3-container w3-light-blue" >
                  <h4 style={{color:"white" }}>{post.login}</h4>
                </header>
                <div className="w3-container"   style={{marginTop:"10px"}}>
                  <img className="w3-left w3-circle w3-margin-right" src={post.avatar_url} alt="avatar" style={{width:"60px"}} />
                  <a href={post.html_url} className="title">{post.html_url}</a>
                  <p>Score:{post.score}</p>
                  
                   
                  </div>
                  <button className="w3-button w3-block" onClick={this.showmore.bind(this, post.id, post.url)}>
                      {this.state.showMoreToggle === post.id ? <span>Show less</span> : <span>Show more</span>}</button>
                
                  {this.state.showMoreToggle === post.id &&
                    <div className="additional-style">
                      <p>created at: {this.state.additionalData.created_at}</p>
                      <p>followers: {this.state.additionalData.followers}</p>
                      <p>public repos: {this.state.additionalData.public_repos}</p>
                      <p>{this.state.additionalData.location}</p>
                    </div>}
                </li>)}
            </ul>
          </div>}
      </div>
    );
  }
}


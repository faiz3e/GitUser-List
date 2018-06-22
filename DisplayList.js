import React, { Component } from 'react';
import MoredataShow from './MoredataShow';
import './StyleSheet.css';
export default class DisplayList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storeClickId: null,
      additionalData: [],
      oldUrl: '',
      viewToggler: false,
    }
  }

  fetchMore(newurl) {
    if (newurl !== this.state.oldUrl)
      fetch(newurl)
        .then(response => response.json())
        .then(additionalData => this.setState({ additionalData }, function () { console.log("additional data >>>", this.state.additionalData) }))
        .then(this.setState({ oldUrl: newurl }))
        .catch(e => e)
    else {
      console.log("same card clicked we dont need to fetch!!");
    }
  }

  showmore(id, url) {
    var postid = id;
    if (this.state.storeClickId !== postid) {
      this.fetchMore(url);
    } else {
      postid = "";
    }
    this.setState({ storeClickId: postid })
  }

  view() {
    var view = this.state.viewToggler;
    this.setState({
      viewToggler: !view
    })

  }

  render() {
    var posts = this.props.post;
    var arrayDataCount = this.props.arrayDataCount;

    return (
      <div>

        <p>No of Records showing:{Object.keys(posts).length} of {arrayDataCount} </p>
        <p>VIEW <button className="float-right" onClick={() => this.view()}>{this.state.viewToggler ? ' grid' : 'list'}</button> </p>
        <ul className={this.state.viewToggler ? 'grid' : 'list'}>
          {posts.map((post) =>
            <li className="w3-card-4 li-style" style={{ width: "30%", marginBottom: "20px",height:"100%" }} key={post.id}>
              {/* card head */}
              <header className="w3-container w3-light-blue" >
                <h4 style={{ color: "white" }}>{post.login}</h4>
              </header>
              {/* midsec */}
              <div className="w3-container" style={{ marginTop: "10px" }}>
                <img className="w3-left w3-circle w3-margin-right" src={post.avatar_url} alt="avatar" style={{ width: "60px" }} />
                <a href={post.html_url} className="title">{post.html_url}</a>
                <p>Score:{post.score}</p>
              </div>
              {/* show more button */}
              {this.state.storeClickId === post.id ?
                <div>
                  <button className="w3-button w3-block buttoncolor" onClick={this.showmore.bind(this, post.id, post.url)}>
                    <span>Show less</span>
                  </button>
                  <MoredataShow additionalData={this.state.additionalData} />
                </div>
                :
                <button className="w3-button w3-block buttoncolor" onClick={this.showmore.bind(this, post.id, post.url)}>
                  <span>Show more</span>
                </button>
              }
            </li>)}
        </ul>}
      </div>
    );
  }
}



import React, { Component } from 'react';
import '../App.css'
export default class MoredataShow extends Component {

  render() {
    var additionalData = this.props.additionalData;
    return (
      <div>
        <div className="additional-style">
          <p>created at: {additionalData.created_at}</p>
          <p>followers: {additionalData.followers}</p>
          <p>public repos: {additionalData.public_repos}</p>
          <p>{additionalData.location}</p>
        </div>
      </div>
    );
  }
}


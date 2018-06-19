import React, { Component } from 'react';
export default class DisplayList extends Component {
  render() {
    
 
    return (
        <div>
            <span>Filter &#x21C5;</span>
            <select name="selectOptionFilter" value={this.props.value} onChange={this.props.onChange}>
              <option value='{ "key":"login", "order":"asc"}'>Name &#8613;</option>
              <option value='{ "key":"login", "order":"dec"}'>Name &#8615;</option>
              <option value='{ "key":"score", "order":"asc"}'>Rank &#8613;</option>
              <option value='{ "key":"score", "order":"dec"}'>Rank &#8615;</option>
            </select><br />
            
          </div>
    );
}}
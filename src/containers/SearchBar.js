import React, { Component } from 'react';
export default class SearchBar extends Component {
    render() {


        return (
            <div>
                <input type="text" name="nameToSearch" placeholder="Search" onChange={this.props.onChange} />
                <button onClick={this.props.onClick}>show data</button>
            </div>
        );
    }
}



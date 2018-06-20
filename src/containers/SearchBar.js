import React, { Component } from 'react';
export default class SearchBar extends Component {

    // shouldComponentUpdate(nextProps,nextState){
    // console.log("props1 ",nextProps.nameToSearch);
    // console.log("props2 ",this.props.nameToSearch);
    // console.log(nextProps.nameToSearch !== this.props.nameToSearch);
    
    // return nextProps.nameToSearch !== this.props.nameToSearch;
    // }
//     componentWillReceiveProps(){console.log("componentWillReceiveProps");
// }
// //     shouldComponentUpdate(nextProps,nextState){console.log("shouldComponentUpdate");
// //     return true
// // }
//     componentWillUpdate(nextProps,nextState){console.log("componentWillUpdate");
// }
//     componentDidUpdate(){console.log("componentDidUpdate");
// }
//     componentDidMount(){console.log("componentDidMount");
// }
    
    
    render() {
    // console.log(this.nextState,"search bar render");
    
        return (
            <div>
               <input type="text" name="nameToSearch" placeholder="Search" onChange={this.props.onChange} />
                <button onClick={this.props.onClick}>show data</button>
            </div>
        );
    }
}



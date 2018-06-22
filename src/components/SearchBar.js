import React, { Component,Fragment } from 'react';
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
    componentDidMount(){
        this.inputElement.focus();
}
    
    
    render() {
    // console.log(this.nextState,"search bar render");
    
        return (
            <Fragment>
               <input type="text" name="nameToSearch" placeholder="Search Git Users" onChange={this.props.onChange} 
               ref={(inpfocus)=>{this.inputElement=inpfocus}}
               />
                <button onClick={this.props.onClick}>show data</button>
            </Fragment>
        );
    }
}



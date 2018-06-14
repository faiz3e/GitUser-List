import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Temp extends Component {

  constructor (props) {
    super(props)
    this.state={
      historicalData:[],
      arrayData:[]

    }
    }
componentDidMount(){
  this.getBitcoinData()
  
}
showData = () => {
  console.log('data',this.state.arrayData);
}




getBitcoinData () {
  fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=PHP`)
    .then(response => response.json())
    .then(arrayData => this.setState({arrayData}))
    .catch(e => e)
  }


  render() {
    var dataDisp;
    if (this.state.arrayData) {
    dataDisp=this.state.arrayData;
    }
 return (
<div>
<div className="App">
<button onClick={()=>this.showData()}>show data</button>
</div>
<div>
{console.log(dataDisp)
}
        
  

{dataDisp && <ul>
          {dataDisp.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul> }
</div>
      </div>
    );
  }
}

export default Temps;

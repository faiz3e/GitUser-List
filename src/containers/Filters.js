import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
class DisplayList extends Component {
  render() {
    return (
        <Fragment>
            <span style={{paddingLeft:"20px"}}>Filter &#x21C5;</span>
            <select name="selectOptionFilter" value={this.props.value} onChange={this.props.onChange}>
              <option value='{ "key":"login", "order":"asc"}'>Name &#8613;</option>
              <option value='{ "key":"login", "order":"dec"}'>Name &#8615;</option>
              <option value='{ "key":"score", "order":"asc"}'>Rank &#8613;</option>
              <option value='{ "key":"score", "order":"dec"}'>Rank &#8615;</option>
            </select><br /> 
          </Fragment>
    );
}

}
DisplayList.propTypes={
  value: PropTypes.string
};


export default DisplayList;

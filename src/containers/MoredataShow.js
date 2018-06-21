import React from 'react';
import PropTypes from 'prop-types';

MoredataShow.propTypes = {
  followers : PropTypes.array,
};


  function MoredataShow(props) {
    return (

      <div>
        <div className="additional-style">
          <p>created at: { props.additionalData.created_at}</p>
          <p>followers: { props.additionalData.followers}</p>
          <p>public repos: { props.additionalData.public_repos}</p>
          <p>{ props.additionalData.location}</p>
        </div>
      </div>
   );
  }

  export default MoredataShow;
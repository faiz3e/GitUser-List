import React from 'react';

  function MoredataShow(props) {
    const additionalData = props.additionalData;
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
  export default MoredataShow;
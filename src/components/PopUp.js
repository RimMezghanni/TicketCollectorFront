import React from 'react';

function PopUp(props) {

    return(<div class="alert alert-warning" role="alert">
    {props.title}
  </div>
    );
  }
  export default PopUp;
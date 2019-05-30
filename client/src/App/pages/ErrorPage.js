import React, { Component } from 'react';
import ErrorCorgi from './images/corgiError.jpg';

class ErrorPage extends Component {

  render() {
    return(
      <div className='App-header'>
      Sorry, something is not working right now. Our well trained corgi is on it!
      ... Please wait... She's waiting for treats...
      <img src={ErrorCorgi} alt='ErrorCorgi' className='Error-corgi'/>
      </div>
      )
  }
}

export default ErrorPage;
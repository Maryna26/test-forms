import React from 'react';
import './Messages.css'

const Errors = ({inputErrors}) =>
  <div className='formErrors'>
    {Object.keys(inputErrors).map((fieldName, i) => {
      if(inputErrors[fieldName].length > 0){
        return (
          <div className="panel panel-default error-message" key={i}>
            <div className="attention-img"></div>
            <div className="message-text">
              <p>Whoops</p>
              <p>{inputErrors[fieldName]}</p>
            </div>

          </div>
        )
      } else {
        return null;
      }
    })}
  </div>

const InfoBlock = (infoText) => {
  switch (infoText) {
    case 'success':
      return (
        <div className="panel panel-default success-login-message">
          <div className="success-login-img"></div>
          <div className="message-text">
            <p>You are successfully logged in!</p>
          </div>
        </div>

      );
    case 'successRegister':
      return (
      <div className="panel panel-default success-login-message">
        <div className="success-login-img"></div>
        <div className="message-text">
          <p>Account successfully created!</p>
        </div>
      </div>
      );
    case 'failed':
      return (
        <div className="panel panel-default failed-message">
          <div className="failed-img"></div>
          <div className="message-text">
            <p>Something went wrong. <br/>Please, try again</p>
          </div>
        </div>
      );
    default:
      break;
  }

};



export {
  Errors,
  InfoBlock
}
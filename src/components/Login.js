import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Utils from '../Utils';
import {Errors, InfoBlock} from './Messages';
import './Login.css'

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      inputErrors: {username: '', password: ''},
      nameValid: false,
      passwordValid: false,
      formValid: false,
      successLogin: ''
    }

  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, Utils.validateInput(name, value, this))
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let userName = e.target.querySelector('.user-input').value;
    let userPass = e.target.querySelector('.password-input').value;
    if (userName === 'test' && userPass === '11111111'){
      this.setState({successLogin: 'success'})
    } else {
      this.setState({
        username: '',
        password: '',
        successLogin: 'failed',
        formValid: false
      });

    }
  };

  render(){
    const hideClass = (this.state.successLogin === 'success') ? 'hide-block' : '';
    const infoMessage = (this.state.successLogin !== 'success') ? null : InfoBlock(this.state.successLogin);


    return(
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-sm-12 col-lg-4 login-content-block">
            <div className="login-logo"></div>
            {infoMessage}
            <div className={`inner-wrapper ${hideClass}`}>
              <h2>Log in</h2>
              <div className="login-content-text">
                <span>Need an account?</span>
                <Link className="registration-link" to="/registration">Create an account</Link>
              </div>
              <form className="input-form" onSubmit={this.handleSubmit}>
                <Errors inputErrors={this.state.inputErrors} />
                {(this.state.successLogin === 'failed') && InfoBlock(this.state.successLogin)}
                <div className="form-group">
                  <label>Username:
                    <input type="text"
                           className={`form-control user-input ${Utils.addErrorClass(this.state.nameValid)}`}
                           value={this.state.username}
                           name="username"
                           onChange={this.handleUserInput}
                           autoComplete="username"
                           autoFocus/>
                  </label>

                </div>
                <div className="form-group">
                  <label>Password:
                    <input type="password"
                           className={`form-control password-input ${Utils.addErrorClass(this.state.passwordValid)}`}
                           value={this.state.password}
                           name="password"
                           autoComplete="password"
                           onChange={this.handleUserInput}/>
                  </label>
                </div>

                <button type="submit" className="btn input-form-btn" value="Log in" disabled={!this.state.formValid}>Log in</button>
              </form>
            </div>

          </div>
          <div className="col-sm-12 col-lg-8 d-none d-lg-block">
            <div className="login-img-block"></div>
          </div>
        </div>

      </div>)
  }
}

export default LoginForm;
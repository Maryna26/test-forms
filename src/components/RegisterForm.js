import React, {Component} from 'react';
import Utils from '../Utils';
import {Errors, InfoBlock} from './Messages';
import './RegisterForm.css'

class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      passRepeat: '',
      inputErrors: {firstName: '', lastName: '', password: '', passRepeat: ''},
      nameValid: false,
      passwordValid: false,
      repeatedPassValid: false,
      formValid: false,
      successRegister: ''
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
    let passRepeat = e.target.querySelector('.password-input').value;

    if (userName === 'test' && userPass === '11111111' && passRepeat === '11111111'){
      this.setState({successRegister: 'successRegister'})
    } else {
      this.clearForm();
      this.setState({
        successRegister: 'failed',
        formValid: false})

    }
  };

  clearForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      password: '',
      passRepeat: ''
    });
  };

  render(){
    const hideClass = (this.state.successRegister === 'successRegister') ? 'hide-block' : '';
    const infoMessage = (this.state.successRegister !== 'successRegister') ? null : InfoBlock(this.state.successRegister);

    return(
      <div className="container-fluid register-block">
        <div className="row register-img">
          <div className="logo-img"></div>
        </div>
        <div className="row register-form-block">
          <div className="col-sm-12 col-lg-12">
            {infoMessage}
            <div className={`inner-wrapper ${hideClass}`}>
              <h2>Get started with your profile</h2>
              <form className="input-form" onSubmit={this.handleSubmit}>
                <Errors inputErrors={this.state.inputErrors} />
                {(this.state.successRegister === 'failed') && InfoBlock(this.state.successRegister)}
                <div className="form-group">
                  <label>First name:
                    <input type="text"
                           className={`form-control user-input ${Utils.addErrorClass(this.state.nameValid)}`}
                           value={this.state.firstName}
                           name="firstName"
                           onChange={this.handleUserInput}
                           autoComplete="first name"
                           autoFocus/>
                  </label>
                </div>
                <div className="form-group">
                  <label>Last name:
                    <input type="text"
                           className={`form-control lastName-input ${Utils.addErrorClass(this.state.nameValid)}`}
                           value={this.state.lastName}
                           name="lastName"
                           onChange={this.handleUserInput}
                           autoComplete="last name"/>
                  </label>
                </div>
                <div className="form-group">
                  <label>Password:
                    <input type="password"
                           className={`form-control password-input ${Utils.addErrorClass(this.state.passwordValid)}`}
                           value={this.state.password}
                           name="password"
                           onChange={this.handleUserInput}
                           autoComplete="password"/>
                  </label>
                </div>
                <div className="form-group">
                  <label>Repeat password:
                    <input type="password"
                           className={`form-control password-repeated ${Utils.addErrorClass(this.state.passwordValid)}`}
                           value={this.state.passRepeat}
                           name="passRepeat"
                           onChange={this.handleUserInput}
                           autoComplete="password repeat"/>
                  </label>
                </div>

                <div className="register-form-btn-group">
                  <button type="submit" className="btn btn-primary input-form-btn" value="Save" disabled={(this.state.password !== this.state.passwordValid) && !this.state.formValid}>Save</button>
                  <button type="button" className="btn btn-primary input-form-btn" value="Cancel" onClick={this.clearForm}>Cancel</button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>)
  }
}

export default RegisterForm;

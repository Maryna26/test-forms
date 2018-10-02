
const Utils  = {
  validateInput(inputName, inputValue, that){

    let inputError = that.state.inputErrors;
    let usernameValid = that.state.nameValid;
    let passwordValid = that.state.passwordValid;

    switch (inputName) {
      case 'username':
        usernameValid = inputValue.match(/^[a-zA-Z]+$/);
        inputError.username = usernameValid ? '' : 'Username should only consist of letters';
        break;
      case 'password':
        passwordValid = inputValue.length >6;
        inputError.password = passwordValid ? '' : 'Password should be more than 6 characters';
        break;
      case 'firstName':
        usernameValid = inputValue.match(/^[a-zA-Z]+$/);
        inputError.firstName = usernameValid ? '' : 'First name should only consist of letters';
        break;
      case 'lastName':
        usernameValid = inputValue.match(/^[a-zA-Z]+$/);
        inputError.lastName = usernameValid ? '' : 'Last name should only consist of letters';
        break;
      case 'passRepeat':
        inputError.passRepeat = (inputValue === that.state.password) ? '' : 'Passwords should be equal';
        break;
      default:
        break;
    }

    if(that.state.repeatedPassValid === undefined) {
      that.setState({
        inputErrors: inputError,
        nameValid: usernameValid,
        passwordValid: passwordValid,
      }, that.setState({formValid: that.state.nameValid && that.state.passwordValid}));
    } else {
      that.setState({
        inputErrors: inputError,
        nameValid: usernameValid,
        passwordValid: passwordValid,
      }, that.setState({formValid: that.state.nameValid && that.state.passwordValid && !that.state.repeatedPassValid}));
    }
  },

  addErrorClass (error) {
      return !error ? 'error' : ''
  }

}

export default Utils;




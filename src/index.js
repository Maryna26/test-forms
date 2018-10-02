import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import RegisterForm from './components/RegisterForm'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div className="root-content">
      <Route exact path="/" component={App} />
      <Route path="/registration" component={RegisterForm} />
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();

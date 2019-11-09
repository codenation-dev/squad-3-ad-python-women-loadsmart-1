import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import AgentCreate from './components/AgentCreate';
import ErrorCreate from './components/ErrorCreate';
import ErrorDetail from './components/ErrorDetail';



import 'bootstrap/dist/css/bootstrap.min.css';

if(localStorage.access) {
  setAuthToken(localStorage.access);
  const decoded = jwt_decode(localStorage.access);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
              <Navbar />
                <Route exact path="/" component={ Home } />
                <div className="container">
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                  <Route exact path="/agent/create" component={ AgentCreate } />
                  <Route exact path="/error/create" component={ ErrorCreate } />
                  <Route path="/:errorId" exact component={ErrorDetail} />
                </div>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;

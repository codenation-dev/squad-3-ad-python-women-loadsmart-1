import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';


if(localStorage.access) {
    
}
class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

   

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <>
            <ul>Bem-vind@ Username</ul>
            <ul className="nav-item">
                <Link className="nav-link" to="/agent/create">
                        Create Agent
                  </Link>
            </ul>
            <ul className="navbar-nav ml-auto">
               
                <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                           <button type="submit"  className="btn btn-outline-primary">
                           Logout
                         </button> 
                </a>
            </ul>
            </>
        )
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
           

            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    <button  className="btn btn-outline-primary">
                        Login
                    </button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">
                    <button  className="btn btn-primary">Sign Up
                    </button>
                </Link>
            </li>
        </ul>
      )
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Central de Erros Squad 3 </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}
Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
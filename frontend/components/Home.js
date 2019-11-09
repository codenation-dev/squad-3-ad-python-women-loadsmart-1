import React, { Component } from 'react';

export default class Home extends Component {
    render() {

    const {isAuthenticated, user} = this.props.auth;
       const authLinks = (
            <ul className="navbar-nav ml-auto">
                <a href="" className="nav-link" onClick={this.onLogout.bind(this)}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                            Logout
                </a>
            </ul>
        )
      const guestLinks = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Sign In</Link>
            </li>
        </ul>
      )
        return (
            <div>
                Home Component
            </div>
        );
    }
}
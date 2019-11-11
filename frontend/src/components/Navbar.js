import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import axios from 'axios';


class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
           name: '',
           
          };
      }
      componentDidMount(){

        this.userName();
      }


  
      userName(){
        axios.get('http://localhost:8000/users/me/')
          .then(response => {
            this.setState({ 
              name: response.data['name'] ,
  
            });
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })
      }


    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <>
            <ul className="navbar-nav ml-auto">
       
                <div href="" className="nav-link" 
                onClick={this.onLogout.bind(this)}>

                        Welcome {this.state.name}
                    <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                           <button type="submit"  className="btn btn-outline-primary">
                           Logout
                         </button> 
                </div>
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
                <Link className="navbar-brand" to="/">Log management tool
</Link>
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
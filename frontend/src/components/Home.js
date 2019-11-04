import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import  RegisterList from './RegisterList'

class Home extends Component {

    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <>
            <p>Usuário autenticado</p>
            <button className="btn btn-primary" onClick={e => {
                    this.showModal();
                }}> Create Agent </button>

            <RegisterList/>
            </>
        )
      const guestLinks = (
        <>
        <p>Visitante não autenticado</p>
        </>
      )
        return(
            
                <section className="container" id="welcome">
                    {isAuthenticated ? authLinks : guestLinks}
                </section>
          
        )
    }
}
Home.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
  
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Home));
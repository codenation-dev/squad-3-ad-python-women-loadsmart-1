import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';

class Home extends Component {



    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <>
            <p>Usuário autenticado</p>
            </>
        )
      const guestLinks = (
        <>
        <p>Usuário autenticado</p>
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
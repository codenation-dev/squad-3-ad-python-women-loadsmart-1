import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import  RegisterList from './RegisterList'


var data = '?sources=DEVELOPMENT&level=';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            sources_list: {},
            level_list: {},
            query:'',
            press:false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            query:'?sources=DEVELOPMENT&level=',
            press: true,
        });

        console.log('press button')
        
    }

    render() {
        const {isAuthenticated, } = this.props.auth;
        const btnPress = ( <RegisterList search = {this.state.query}/> 
            )
        
        const btnNotPress = (<p></p>)
        const authLinks = (
            <>
            <br></br>
            <h1 align="center"> Central de Erros</h1>
            
                <form onSubmit={ this.handleSubmit }>
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="City"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="State"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Zip"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="search"/>
                    </div>

                        <button type="submit"  className="btn btn-dark " onClick={e => {
                           }}> SEARCH
                        </button>
                 </div>
                </form>
           
        
            <div className="container">
                    {this.state.press ? btnPress : btnNotPress}
            </div>
            
            </>
        )
      const guestLinks = (
        <>
        <p>Central de erros. Boas-vindas, usuário não autenticado.</p>
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
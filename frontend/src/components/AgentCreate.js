import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAgent } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';


class AgentCreate extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            status: true,
            env: '',
            version: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const agent = {
            name: this.state.name,
            address: this.state.address,
            env: this.state.env,
            version: this.state.version
        }
        this.props.createAgent(agent);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }


    componentDidMount() {
        if (this.props.auth.isAuthenticated)  {
           // this.props.history.push('/');
        }
    } 


    render() {
        const {isAuthenticated} = this.props.auth;
        const { errors } = this.state;

        const authLinks = (
            <>
            

            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>New Agent</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Name"
                    className={classnames('form-control form-control-lg', {
                       
                    })}
                    name="name"
                    onChange={ this.handleInputChange }
                    value={ this.state.name }
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="adress"
                    placeholder="IP Address"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.address
                    })}
                    name="address"
                    onChange={ this.handleInputChange }
                    value={ this.state.address }
                    />
                    {errors.address && (<div className="invalid-feedback">{errors.address}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Env"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.env
                    })}
                    name="env"
                    onChange={ this.handleInputChange }
                    value={ this.state.env }
                    />
                    {errors.env && (<div className="invalid-feedback">{errors.env}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Version"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.version
                    })}
                    name="version"
                    onChange={ this.handleInputChange }
                    value={ this.state.version }
                    />
                    {errors.version && (<div className="invalid-feedback">{errors.version}</div>)}
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                        Create
                    </button>
                </div>
            </form>
        </div>
        </>
        )
      const guestLinks = (
        <>
        <p>Unauthenticated user.</p>
        </>
      )
        return(
            
                <section className="container" id="welcome">
                    {isAuthenticated ? authLinks : guestLinks}
                </section>
          
        )
    }
}
AgentCreate.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { createAgent })(withRouter(AgentCreate));
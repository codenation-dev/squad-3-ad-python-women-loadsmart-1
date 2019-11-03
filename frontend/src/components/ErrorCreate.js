import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createError } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';


class ErrorCreate extends Component {

    constructor() {
        super();
        this.state = {
            sources: '',
            description: '',
            title: '',
            log: '',
            level: null,
            agent: null,
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
        this.props.createError(agent);
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
            <p>Usuário autenticado</p>
            

            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>New Error</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Source"
                    className={classnames('form-control form-control-lg', {
                       
                    })}
                    name="sources"
                    onChange={ this.handleInputChange }
                    value={ this.state.sources }
                    />
                    {errors.name && (<div className="invalid-feedback">{errors.sources}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Title"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.title
                    })}
                    name="title"
                    onChange={ this.handleInputChange }
                    value={ this.state.title }
                    />
                    {errors.address && (<div className="invalid-feedback">{errors.title}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="textarea"
                    placeholder="Description"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.description
                    })}
                    name="env"
                    onChange={ this.handleInputChange }
                    value={ this.state.env }
                    />
                    {errors.env && (<div className="invalid-feedback">{errors.description}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    placeholder="Log"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.version
                    })}
                    name="log"
                    onChange={ this.handleInputChange }
                    value={ this.state.log }
                    />
                    {errors.version && (<div className="invalid-feedback">{errors.log}</div>)}
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
        <p>Usuário não autenticado</p>
        </>
      )
        return(
            
                <section className="container" id="welcome">
                    {isAuthenticated ? authLinks : guestLinks}
                </section>
          
        )
    }
}
ErrorCreate.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { createError })(withRouter(ErrorCreate));
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import  CentralList from './CentralList'



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
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();


        if (this)

        this.setState({
            query: this.state.source+this.state.level,            
            press: true,
        });
        console.log('press button')
    }


    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            press: false,
        }) 
     
    }



    render() {
        const {isAuthenticated } = this.props.auth;
        const btnPress = (
             <>                    
                    <CentralList search = {this.state.query}/> 
            </> )
        
        const btnNotPress = (<p>Pesquisando....clique no botão search para nova pesquisa</p>)
        const authLinks = (
            <>
            <br></br>
            <h1 align="center"> CENTRAL DE ERROS</h1>
        

                <form onSubmit={ this.handleSubmit }>
                <div class="form-row">
                    <div class="col">
                    <select class="custom-select" 
                    id="sourceSelect" name="source" 
                    onChange={ this.handleInputChange }
                    value={this.state.value}>
                        <option value="?sources=PRODUCTION">Production</option>
                        <option value="?sources=TESTING">Testing</option>
                        <option value="?sources=DEVELOPMENT">Development</option>

           
                    </select>
                    </div>
                    <div class="col">

                    <select 
                        class="custom-select" 
                        id="levelSelect" 
                        name="level" 
                        onChange={ this.handleInputChange }
                        value={this.state.value}

                    >
                        <option value='&level='>Level</option>
                        <option value="&level=ERROR">  Error</option>
                        <option value="&level=WARNING">  Warning</option>

                        <option value="&level=DEBUG"> Debug</option>
                    </select>
                    </div>
                    <div class="col">

                    <select class="custom-select" id="orderSelect" name="order" onChange={  this.handleInputChange }>
                        <option value="1" >Order default</option>
                        <option value="2" >Level</option>
                        <option value="3" >Frequência</option>
                    </select>
                    </div>
                    <div class="col-5">
                        <input type="text" class="form-control" placeholder="search"/>
                    </div>
                        <button type="submit"  className="btn btn-primary " onClick={e => {
                                  

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
                    <>
          
                <section className="container" id="welcome">
                    {isAuthenticated ? authLinks : guestLinks}


                </section>
            </>
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
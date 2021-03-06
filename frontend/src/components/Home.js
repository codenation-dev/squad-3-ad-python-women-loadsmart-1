import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser,  } from '../actions/authentication';
import { withRouter } from 'react-router-dom';
import  CentralList from './CentralList'



class Home extends Component {

    
    constructor() {
        super();
        this.state = {
            username: '',
            sources: '&sources=',
            level: '&?ordering=level',
            order: '&?order=',
            search: ' ',

            query:'',
            press: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }
   
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.source == undefined){
            this.state.source = '?sources=';
        }

        
        if (this)
            this.setState({
                query: this.state.source+this.state.level+this.state.order,
                press: true,

            });

        if (this.state.search.length > 1 ){
                this.setState({
                query: '?search='+this.state.search,
                press: true,
        });
    
        }
        console.log('press button')
    }

    handleSubmitSearch(e) {
        e.preventDefault();
       if (this)
        this.setState({
            query: this.state.search,
            press: true,
        });
        console.log('press button search')
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
            press: false,

        })
    }

    handleChange(e) {
        this.setState({
        [e.target.name]: e.target.value,
          
        })
    }



    render() {
        const {isAuthenticated } = this.props.auth;
        const btnPress = (
             <>         
                    <CentralList search = {this.state.query}/> 
            </> )
        
        const btnNotPress = (
                        <>      Click on seach to apply filters
                          <CentralList search = {this.state.query}/> 

                        </>
            )
        const authLinks = (
            <>
            <div className="container">
            <br></br>
            <h1 align="center"> LOG MANAGEMENT CENTER</h1>
        

                <form onSubmit={ this.handleSubmit }>
                <div class="form-row">
                    <div class="col">
                    <select class="custom-select" 
                    id="sourceSelect" name="source" 
                    onChange={ this.handleInputChange }
                    value={this.state.value}>
                        <option value="?sources=">Source</option>
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
                        <option value="&level=ERROR">Error</option>
                        <option value="&level=WARNING">Warning</option>

                        <option value="&level=DEBUG">Debug</option>
                    </select>
                    </div>
                    <div class="col">

                    <select class="custom-select" 
                    id="orderSelect" 
                    name="order" 
                    onChange={ this.handleInputChange}>
                        <option value="&?ordering=" >Order default</option>
                        <option value="&?ordering=level" >Level Ascen</option>
                        <option value="&?ordering=-level" >Level Descend</option>
                        <option value="&?ordering=created" >Date Ascen</option>
                        <option value="&?ordering=-created" >Date Descend</option>
                        <option value="&?ordering=source" >Source Ascen</option>
                        <option value="&?ordering=-source" >Source Descend</option>
                    </select>
                    </div>
                    
                        
                        <div class="col-5">
                        <input type="text" 
                        class="form-control" 
                        placeholder="search"
                        name="search" 
                        value={this.state.value}
                        onChange={ this.handleInputChange}/>
                    </div>

                    <button type="submit"  className="btn btn-primary " onClick={e => 
                            { this.state.press = false }}> SEARCH
                        </button>
                     
                 </div>
                </form>
                <br/>
                
            <div className="container">
                    {this.state.press ? btnPress : btnNotPress}
            </div>
         </div>
            
            </>
        )

      const url = 'https://media.giphy.com/media/l2JJDrvnFUEboRgSQ/giphy.gif';
      const guestLinks = (
        <>
       
        <h2 align="center">Wellcome to Log Management Tool</h2>
        <div className="6">
        <img class="img-fluid" src={'https://jooinn.com/images1280_/big-data-analytics.jpg'} />
        </div>

                   
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
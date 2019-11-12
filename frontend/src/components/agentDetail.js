import React, { Component } from 'react';
import axios from 'axios';

export default class AgentDetail extends Component {

  constructor(props) {
      super(props);
      this.state = {
          address: '', 
          env: '',
          name: '',
         
        };
    }

    componentDidMount(){
      var search = this.props.search;
      axios.get('http://localhost:8000/api/agent/'+search)
        .then(response => {
          this.setState({ 
            name: response.data['name'] ,
            address: response.data['address'],
            env: response.data['env']

          });
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }

  

    render() {
      return (
        <> <br/>
        
        Agent name:{this.state.name}
         <br/>
        Agente env: {this.state.env}
        <br/>
        Agent address:{this.state.address}
         </>
      );

    }

  }
    







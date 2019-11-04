import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {
          register: [], 
          count: 0,
          next: null,
          previous: null,
    
        };
    }
    componentDidMount(){
      axios.get('http://localhost:8000/api/central/')
        .then(response => {
          this.setState({ register: response.data.results });
          this.setState({ count: response.data.count });
          this.setState({ next: response.data.next });
          this.setState({ previous: response.data.previous });
          console.log(response.data)
          console.log('oi');

        })
        .catch(function (error) {
          console.log(error);
        })
    }
    tabRow(){

      return this.state.register.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <div>
          <h3 align="center"> Central de Erros</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Level</th>
                <th>Log</th>
                <th>Source</th>
                <th>Events</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
      );
    }
  }
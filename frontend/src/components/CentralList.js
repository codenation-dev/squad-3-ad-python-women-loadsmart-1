import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';


export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {
          register: [], 
          count: 0,
          next: 'http://localhost:8000/api/central/',
          previous: null,
    
        };
    }

    getLogs = (direction = 'next')=> {
      const search = this.props.search;
      axios.get(this.state[direction]+search)
        .then(response => {
          this.setState({ register: response.data.results });
          this.setState({ count: response.data.count });
          this.setState({ next: response.data.next });
          this.setState({ previous: response.data.previous });
        })
        .catch(function (error) {
        })
    }

    componentDidMount(){
      this.getLogs();
    }
    tabRow(){

      return this.state.register.map(function(object, i){
          return <TableRow obj={object} key={i} />;
      });
    }

    render() {
      return (
        <>

        <div>
          <table className="table table" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Level</th>
                <th>Source</th>
                <th>Log</th>
                <th>Events</th>
                <th colSpan="3">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          {this.state.previous && <li class="page-item"><a class="page-link" onClick={()=>this.getLogs('previous')} href="#">Previous</a></li> || ''}
          <li class="page-item"><a class="page-link" onClick={()=>this.getLogs('next')}> Next</a></li>
        </ul>
      </nav>
      </>
      );
    }
  }
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
      var search = this.props.search;
      axios.get('http://localhost:8000/api/central/'+search)
        .then(response => {
          this.setState({ register: response.data.results });
          this.setState({ count: response.data.count });
          this.setState({ next: response.data.next });
          this.setState({ previous: response.data.previous });
          console.log(response.data)
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
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
      </>
      );
    }
  }
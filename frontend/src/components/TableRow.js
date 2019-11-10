import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteError } from '../actions/authentication';


class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.level}
          </td>
          <td>
            {this.props.obj.sources}
          </td>
          <td>
            {this.props.obj.log}
          </td>

          <td>
          {this.props.obj.error_counting}
          </td>
          <td>
            <Link to={`/${this.props.obj.id}`}>
                <button className="btn btn-outline-primary" >Details
                </button>
            </Link>
            
          </td>
          <td>
            <button className="btn btn-outline-danger"  onClick= {deleteError(this.props.obj.id)} 
             >
              Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
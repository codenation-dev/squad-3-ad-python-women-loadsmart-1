
import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.level}
          </td>
          <td>
            {this.props.obj.log}
          </td>
          <td>
            {this.props.obj.sources}
          </td>
          <td>
          {this.props.obj.error_counting}
          </td>
          <td>
            <button className="btn btn-dark ">Edit</button>
          </td>
          <td>
            <button className="btn btn-danger ">Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;
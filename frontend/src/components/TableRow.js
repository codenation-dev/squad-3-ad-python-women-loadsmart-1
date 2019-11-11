import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteError, updateError } from '../actions/authentication';


class TableRow extends Component {


  constructor() {
    super();
    this.state = {
      shown: true,

    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDesativate = this.handleDesativate.bind(this);


}

  handleDelete(e) {
    this.setState({
    [e.target.name]: e.target.value,
    shown: false,
      
    })
    alert("Deletado");
    deleteError(this.props.obj.id)
}

handleDesativate(e) {
  this.setState({
  [e.target.name]: e.target.value,
  shown: false,
    
  })
  alert("Arquivado");
  updateError(this.props.obj.id)
}
  
  render() {
    const showRow = (
          <>
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
            <Link to={`/central/${this.props.obj.id}`}>
                <button className="btn btn-outline-primary" >Details
                </button>
            </Link>
            
          </td>
          <td>
            <button className="btn btn-outline-secondary"  onClick= {this.handleDesativate} 
             >
              Desactivete</button>
          </td>

          <td>
            <button className="btn btn-outline-danger"  onClick= {this.handleDelete} 
             >
              Delete</button>
          </td>
        </>

    )
    return (
        <tr>
          {this.state.shown ? showRow : ""}
                          
        </tr>
    );
  }
}

export default TableRow;
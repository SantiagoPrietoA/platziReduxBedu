import React, {Component} from 'react';
import {connect} from "react-redux";

import RenderRow from '../RenderRow.jsx';
import Layout from '../Layout.jsx';
import Loader from '../Loader/Loader';
import Fail from '../Fail/Fail.jsx';

import * as usersActions from '../../actions/usersActions';

class User extends Component {


  componentDidMount() {
	  if(!this.props.users.length){ 
	  	this.props.getAll();

	  }
  }

	
	render() {
		if ( this.props.isLoading) {
			return <Loader/>

		}

    if ( this.props.error) {
			return <Fail error={this.props.error}/>

		}

		
		return (
			<div className="margen">
				<table className="table">
					<thead className="thead-dark">
						<tr>
              <th scope="col">Nombre</th>
              <th scope="col">Correo</th>
              <th scope="col">Enlace</th>
              <th scope="col">Posts</th>
						</tr>
					</thead>
					<tbody>
						<RenderRow/> 
					</tbody>
				</table>
			</div>
		)

		

	}

};

const mapStateToProps = (reducers) => {
	return reducers.usersReducer;
};

export default Layout(connect(mapStateToProps, usersActions)(User));

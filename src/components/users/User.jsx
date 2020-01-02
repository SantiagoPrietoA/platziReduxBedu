import React, {Component} from 'react';
import axios from 'axios';
import {connect} from "react-redux";

import RenderRow from '../RenderRow.jsx';
import Layout from '../Layout.jsx';

class User extends Component {

//   async getUsers() {
//     try {
//       const data = await axios.get('https://jsonplaceholder.typicode.com/users');
//       return data.data;
//     } catch (error) {
//       console.error(error);
//       return;
//     }

//   }

//   async componentDidMount() {
//     const data = await this.getUsers();
//     this.setState({ users: data})

//   }

	
	render() {
    console.log('desde users', this.props);
		return (
			<div className="margen">
				<table className="tabla">
					<thead>
						<tr>
							<th>
								Nombre
							</th>
							<th>
								Correo
							</th>
							<th>
								Enlace
							</th>
						</tr>
					</thead>
					<tbody>
						{/* <RenderRow users={this.state.users}/>  */}
					</tbody>
				</table>
			</div>
		)

	}

};

const mapStateToProps = (reducers) => {
	return reducers.usersReducer;
};

export default Layout(connect(mapStateToProps, {/*Accion Creator*/})(User));
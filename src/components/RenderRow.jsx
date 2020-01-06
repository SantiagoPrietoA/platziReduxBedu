import React, {Fragment} from 'react';
import {connect} from "react-redux";

import { Link } from "react-router-dom";



const RenderRow = (props) => {


    const users = props.users;
    const newUsers = users.map( (user,index) => {
        return (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
                <td><Link className="btn btn-primary" to={`/posts/${index}`}>Ver más</Link></td>
            </tr>
        )
    })

    return(
        <Fragment>
            { newUsers }
        </Fragment>
    )


}

const mapStateToProps = (reducers) => {
	return reducers.usersReducer;
};


export default connect(mapStateToProps)(RenderRow)
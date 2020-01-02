import React, {Fragment} from 'react';

const RenderRow = (props) => {

    const users = props.users;
    const newUsers = users.map( (user) => {
        return (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.website}</td>
            </tr>
        )
    })


    return(
        <Fragment>
            { newUsers }
        </Fragment>
    )


}

export default RenderRow;
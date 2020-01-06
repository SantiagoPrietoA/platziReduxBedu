import React, {Fragment} from 'react';
import Loader from '../Loader/Loader';
import Fail from '../Fail/Fail.jsx';

import {connect} from "react-redux";

const Comments = (props) => {


    if(props.comments_error) {
        return <Fail/>
    }

    if(props.comments_isLoading && !props.comments.length) {
        return <Loader/>
    }
    const renderComments = () => {


        return(
            props.comments.map((comment) => (

                <div key={comment.id} className="card" style={{width: "90%", margin: "10px 0"}}>
                    <div className="card-body">
                        <h5 className="card-title">{ comment.email }</h5>
                        <p className="card-text"> { comment.body }</p>
                    </div>
                </div>
            ))
        )
    }

    return(
        <Fragment>
            <h3>Comments</h3>
            
           {renderComments()}
        
        </Fragment>

    )
} 

const mapStateToProps = ({postsReducer}) => postsReducer;


export default connect(mapStateToProps)(Comments);
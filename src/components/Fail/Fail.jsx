import React from 'react';
import './Fail.css'


const Fail = (props) => {

    return(
        <div className="card-fail">
            <div className="card" style={{width:  "18rem"}}>
                <img src="/images/error.jpg" className="card-img-top" alt="server error"/>
                <div className="card-body">
                    <h5 className="card-title">Error</h5>
                    <p className="card-text">{props.error}</p>
                </div>
            </div>
        </div>
    )
}

export default Fail;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../Layout.jsx';
import Loader from '../Loader/Loader';
import Fail from '../Fail/Fail.jsx';

import { connect } from "react-redux";
import * as tasksActions from '../../actions/tasksActions';

class Tasks extends Component {

    componentDidMount() {
        if (!Object.keys(this.props.tasks).length) {
            this.props.getTasks()
        }
    }

    componentDidUpdate() {
		if (!Object.keys(this.props.tasks).length)
			this.props.getTasks();
	}

    renderContent = () => {
        const {tasks, isLoading, error} = this.props;

        if (isLoading) return <Loader/>

        if (error) return <Fail/>


        return (
            <div className="card-columns">
                {
                    Object.keys(tasks).map(user_key => (

                    <div className="card" key={user_key}>
                        <div className="card-body">
                            <h5 className="card-title">Usuario numero {user_key}</h5>
                            <div className="card-text">{this.renderTask(user_key)}</div>
                        </div>
                    </div>
                    ))}                
            </div>

        )
    }

    renderTask = (user_key) => {
        const {tasks, handlerCheck, deleteTask} = this.props;

        const userTasks = {
            ...tasks[user_key]
        }

        return Object.keys(userTasks).map(task_key => {
            return (
                <div className="custom-control custom-checkbox" key={task_key}>
                    <input 
                        onChange={() => handlerCheck(user_key, task_key)} 
                        type="checkbox" 
                        className="custom-control-input" 
                        id={task_key} 
                        defaultChecked={userTasks[task_key].completed}
                    />
                    <label className="custom-control-label" htmlFor={task_key}>{userTasks[task_key].title}</label>
                    <div className="btn-group-sm" role="group" aria-label="Basic example">
                        <Link to={`/tasks/save/${user_key}/${task_key}`} type="button" className="btn btn-success mr-1">Edit</Link>
                        <button onClick={ () => deleteTask(task_key) } type="button" className="btn btn-danger">Delet</button>
                    </div>
                </div>
            )
        })

    }

    render() {
        return(
            <div className="container">
                <Link to="/tasks/save" className="btn btn-primary btn-block mt-4">New task</Link>
                <h1>Tasks work</h1>
                {this.renderContent()}
            
            </div>
        )

    }

}

const mapStateToProps = ({tasksReducer}) => tasksReducer;


export default Layout(connect(mapStateToProps, tasksActions)(Tasks));
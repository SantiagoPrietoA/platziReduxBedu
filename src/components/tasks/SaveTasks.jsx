import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Layout from '../Layout.jsx';
import Loader from '../Loader/Loader';
import Fail from '../Fail/Fail.jsx';
import * as tasksActions from '../../actions/tasksActions';


class SaveTasks extends Component {

    componentDidMount() {
        const {
            match: {params: {userKey, taskKey}},
            changeTaskTitle,
            changeUserId,
            tasks
        } = this.props

        if(userKey && taskKey) {
            const task = tasks[userKey][taskKey];
            changeUserId(task.userId);
            changeTaskTitle(task.title)
        }
    }

    handlerChangeId = (event) => {
        this.props.changeUserId(event.target.value);
        // console.log(event.target.value);
    }

    handlerChangeTitle = (event) => {
        this.props.changeTaskTitle(event.target.value);
    }

    handlerClickSave = () => {
        const {match: {params: {userKey, taskKey}}, taskTitle, userId, saveTask, editTask, tasks} = this.props;

        const newTask = {
            userId: userId,
            title: taskTitle,
            completed: false
        }

        if (userKey || taskKey) {
            const task = tasks[userKey][taskKey]
            const editedTask = {
                ...newTask,
                completed: task.completed,
                id: task.id
            }

            editTask(editedTask)
        }else {
            saveTask(newTask);

        }

    }

    disabled = () => {
        const {isLoading, error, userId, taskTitle} = this.props
        if(isLoading) return true
        if(error) return true
        if(!userId || !taskTitle) return true

        return false
    }

    renderInfo = () => {
        const {isLoading, error} = this.props;

        if (isLoading) return <Loader/>

        if (error) return <Fail/> 

        return (
            <div className="container mt-4">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">User id</label>
                    <input onChange={this.handlerChangeId} type="number" className="form-control" id="exampleInputEmail1" value={this.props.userId}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Task</label>
                    <input onChange={this.handlerChangeTitle}  type="text" className="form-control" id="exampleInputPassword1" value={this.props.taskTitle}/>
                </div>
                <button onClick={this.handlerClickSave} disabled={this.disabled()}  className="btn btn-primary">Submit</button>
            </div>
        )
    }

    render() {
        if(this.props.return) return <Redirect to='/tasks' />
        return this.renderInfo()
        
    }
}

const mapStateToProps = ({ tasksReducer }) => tasksReducer

export default Layout(connect(mapStateToProps, tasksActions)(SaveTasks));
import React, { Component, Fragment } from 'react';
import {connect} from "react-redux";
import * as usersActions from '../../actions/usersActions';
import * as postsActions from '../../actions/postsActions';

import Layout from '../Layout.jsx';
import Loader from '../Loader/Loader';
import Fail from '../Fail/Fail.jsx';
import Comments from '../Comments/Comments.jsx';

export class Posts extends Component {

    async componentDidMount() {
        const index = this.props.match.params.index
        if(!this.props.usersReducer.users.length){
	        await this.props.getAll();
        }

        if(!('postsKey' in this.props.usersReducer.users[index])) {
            this.props.getByUser(index);
        }
	    
    }

    renderUser() {
        const index = this.props.match.params.index
        if ( this.props.usersReducer.isLoading || !this.props.usersReducer.users.length ) {
			return <Loader/>
		}

        if ( this.props.usersReducer.error) {
			return <Fail error={this.props.usersReducer.error}/>
		}

        const name = this.props.usersReducer.users[index].name
        return (
            <div>
                <h1 className="text-center mt-4">Publicacion de {name}</h1>
            </div>
        );
    }

    renderPosts = () => {
		const {
			usersReducer,
			usersReducer: { users },
			postsReducer,
			postsReducer: { posts },
			match: { params: { index } }
		} = this.props;

		if (!users.length) return;
		if (usersReducer.error) return;
		if (postsReducer.isLoading) {
			return <Loader />;
		}
		if (postsReducer.error) {
			return <Fail error={ postsReducer.error } />
		}
		if (!posts.length) return;
		if (!('postsKey' in users[index])) return;

		const { postsKey } = users[index];
		return this.renderCards(posts,postsKey)
	};

    renderCards = (posts,key) => {
        return(
            posts[key].map((post,index) => (

                <div key={post.id} className="card" style={{width: "80%", margin: "10px auto"}}>
                    <div className="card-body">
                        <h5 className="card-title">{ post.title }</h5>
                        <p className="card-text"> { post.body }</p>
                        <div className="card-text"> { (post.isOpen) ? <Comments comments={post.comments}/> : '' }</div>
                        <button onClick={ ()=>this.renderComments(key,index,post.comments)} className="btn btn-primary">Ver numero del post</button>
                    </div>
                </div>
            ))
        )
    }

    renderComments = (key,index,comments) => {

        this.props.openClose(key,index);

        if(!comments.length) {
            this.props.getComments(key,index);
        }

    }
  
    render() {
        return(
        <Fragment>
            {this.renderUser()}
            {this.renderPosts()}
        </Fragment>

        )

    }
}

const mapStateToProps = ({usersReducer, postsReducer}) => {
	return {usersReducer,postsReducer}
};

const mapDispatchToProps = {
	...usersActions,
    ...postsActions
};

export default Layout(connect(mapStateToProps, mapDispatchToProps)(Posts));

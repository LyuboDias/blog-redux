import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPost } from '../actions';


class PostsShow extends Component {
  componentWillMount() {
    if (!this.props.post) {
      this.props.fetchPost(this.props.match.params.id);
    }
  }


  render() {
    if (!this.props.post) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="post-item">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.content}</p>
        </div>
        <Link to="/">
        Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10); // From URL const post =
  const post = state.posts.find(p => p.id === id);
  return { post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);

import React from 'react';
import { connect } from 'react-redux';

import Post from './Post';

import './Post.css';

const Posts = ({ postsData }) => (
  <div className="posts">
    {postsData ? (
      postsData.map((post, index) => <Post {...post} key={index} />)
    ) : (
      <p>You have no posts</p>
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    postsData: state.posts.posts,
  };
};

export default connect(mapStateToProps)(Posts);

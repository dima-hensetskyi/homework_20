import React from 'react';

import Posts from './components/Post/Posts';
import PostForm from './components/PostForm/PostForm';

const App = () => {
  return (
    <div className="container">
      <div className="row1">
        <Posts />
      </div>
      <div className="row2">
        <PostForm />
      </div>
    </div>
  );
};

export default App;

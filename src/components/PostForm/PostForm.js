import React from 'react';

import { createPost } from '../redux/actions/actions';
import { ANAKIN_IMAGE } from '../Post/PostsData';
import { mandoImage } from '../Post/PostsData';

import {
  FormControl,
  NativeSelect,
  InputLabel,
  Input,
  Button,
  Card,
} from '@material-ui/core';
import { connect } from 'react-redux';

class PostForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Anakin Skywalker',
      nickname: '',
      content: '',
      image: '',
    };
  }

  submitHendler = () => {
    const { nickname, content, image, name } = this.state;
    if (!nickname || !content || !image) {
      return;
    }

    const mounth = new Date().getMonth();
    const day = new Date().getDate();
    const options = { month: 'long' };
    const correctMounth = new Intl.DateTimeFormat('en-US', options).format(
      mounth
    );

    const newPost = {
      author: {
        name,
        photo: name === 'Anakin Skywalker' ? ANAKIN_IMAGE : mandoImage,
        nickname,
      },
      content,
      image,
      date: `${day} ${correctMounth}`,
      comment: 0,
      share: 0,
      favorite: 0,
    };

    this.props.createPost(newPost);
    this.resetInput();
  };

  changeInputHendler = (event) => {
    this.setState((prev) => ({
      ...prev,
      ...{ [event.target.name]: event.target.value },
    }));
  };

  resetInput = () => {
    this.setState({
      name: '',
      photo: '',
      nickname: '',
      content: '',
      image: '',
    });
  };

  render() {
    return (
      <Card variant="outlined" id="card">
        <h1> Add Post</h1>
        <div className="card-header">
          <NativeSelect
            name="name"
            variant="outlined"
            id="card-select"
            onChange={(event) => this.changeInputHendler(event)}
          >
            <option value="Anakin Skywalker">Anakin Skywalker</option>
            <option value="Mandalorian">Mandalorian</option>
          </NativeSelect>
          <FormControl id="nickname-form">
            <InputLabel htmlFor="nickname">Nick name</InputLabel>
            <Input
              name="nickname"
              value={this.nickname}
              onChange={(e) => this.changeInputHendler(e)}
            />
          </FormControl>
        </div>
        <FormControl>
          <InputLabel htmlFor="Text">What's on your mind</InputLabel>
          <Input
            name="content"
            value={this.content}
            onChange={(e) => this.changeInputHendler(e)}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="PictureURL">Picture URL</InputLabel>
          <Input
            name="image"
            value={this.image}
            onChange={(e) => this.changeInputHendler(e)}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          id="card-btn"
          onClick={this.submitHendler}
        >
          Post
        </Button>
      </Card>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);

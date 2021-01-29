import { React } from 'react';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import ShareIcon from '@material-ui/icons/Share';
import ForwardIcon from '@material-ui/icons/Forward';

const Post = ({ author, date, content, image, comment, share, favorite }) => (
  <div className="post">
    <div className="author">
      <img src={author.photo} alt="author" />
      <p className="name">{author.name}</p>
      <p className="autor-information">{`@${author.nickname}`} •</p>
      <p className="autor-information">{date}</p>
    </div>
    <div className="content">
      <p className="content-text">{content}</p>
      <img src={image} alt={`post content`} />
    </div>
    <div className="badges">
      <span name="comment">
        <ModeCommentOutlinedIcon></ModeCommentOutlinedIcon>
        {comment}
      </span>
      <span name="share">
        <ShareIcon></ShareIcon>
        {share}
      </span>
      <span name="favorite">
        <FavoriteBorderIcon></FavoriteBorderIcon>
        {favorite}
      </span>
      <span name="forward">
        <ForwardIcon></ForwardIcon>
      </span>
    </div>
  </div>
);

export default Post;

import { render, screen } from '@testing-library/react';
import Post from "../Post";
import renderer from 'react-test-renderer';
test('should render Post Panel', () => {
  const index = "";
  const element = {_id:"4356", posted_by: { firstname: "mahir", lastname: "asrani" }, like: [], dislike: [], comment: [{_id:"", user_id:"",message:"",picture_url:"", likes:[],replyBy:[]}] };
  const like = ()=>{};
  const dislike =()=>{};
  const commentBox = ()=>{};
  const userData = "56789";
  const report = "";
  const postComment = ()=>{

  }
  const commentLike = ()=>{

  }
    render( <Post
    key={element._id}
    index={index}
    id={element._id}
    data={element}
    inclike={like}
    deslike={dislike}
    commentBox={commentBox}
    userdata={userData}
    reportPost={report}
    uid={userData}
    postComment={postComment}
    commentLike={commentLike}
  />)

  const text = screen.queryByTestId('whoPosted').innerHTML;
  expect(text).toBe("mahir asrani");

  const component = renderer.create( <Post
    key={element._id}
    index={index}
    id={element._id}
    data={element}
    inclike={like}
    deslike={dislike}
    commentBox={commentBox}
    userdata={userData}
    reportPost={report}
    uid={userData._id}
    postComment={postComment}
    commentLike={commentLike}
  />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot();

})
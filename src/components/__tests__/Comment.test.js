import { render, screen } from '@testing-library/react';
import Comment from '../Comment';
import renderer from 'react-test-renderer';
test('should render Comment Panel', () => {
    const element = {
        picture_url: "no pic",
        message: 'no msg',
        likes: ["1234567"],
        replyBy: [{}]
    }
    const data = {
        posted_by: { _id: "1234567" }
    }
    const postComment = () => {

    }
    const userdata = { _id: "12345" }
    render(<Comment dataComment={element} postId={'12345'} index={"1"} senderPic={'pic.url'} userDetails={data} postComment={postComment} userdata={userdata} commentLike={"commentLike"} />)
    const text = screen.queryByTestId('userCommentPic').src;
    const text1 = screen.queryByTestId('cmnt').innerHTML;
    const component = renderer.create(<Comment dataComment={element} postId={'12345'} index={"1"} senderPic={'pic.url'} userDetails={data} postComment={postComment} userdata={userdata} commentLike={"commentLike"} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
    expect(text).toBe("http://localhost/no%20pic");
    expect(text1).toBe("no msg");
})

test('should render Comment replies part', () => {
    const element = {
        picture_url: "no pic",
        message: 'no msg',
        likes: ["12345"],
        replyBy: [{}]
    }
    const data = {
        posted_by: { _id: "1234567" }
    }
    const postComment = () => {

    }
    const userdata = { _id: "12345" }
    render(<Comment  dataComment={element} postId={'12345'} index={"1"} senderPic={'pic.url'} userDetails={data} postComment={postComment} userdata={userdata} commentLike={"commentLike"} />)


    const text = screen.queryByTestId('cmntlike').textContent;
    const component = renderer.create(<Comment dataComment={element} postId={'12345'} index={"1"} senderPic={'pic.url'} userDetails={data} postComment={postComment} userdata={userdata} commentLike={"commentLike"} />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
    expect(text).toBe("Unlike");

})

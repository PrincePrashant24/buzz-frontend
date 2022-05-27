import axios from 'axios';
import { toast } from 'react-toastify';
import { APICOMMENTREPLY_URL,APICOMMENTLIKE_URL } from '../config';

import {
  APICOMMENT_URL,
  APILIKE_URL,
  APINEWPOST,
  APIREPORT_URL,
  APIUNLIKE_URL,
  API_FEEDFILE_UPLOAD,
} from '../config';

export const Inlike = (id, setPosts, posts) => {
  axios
    .post(
      `${APILIKE_URL}`,
      {
        post_id: id,
      },
      { withCredentials: true }
    )
    .then((res) => {
      setPosts(posts.map((p) => (p._id === res.data._id ? res.data : p)));
    })
    .catch((err) => console.log(err.message));
};

export const unlike = (id, setPosts, posts) => {
  axios
    .post(
      `${APIUNLIKE_URL}`,
      {
        post_id: id,
      },
      { withCredentials: true }
    )
    .then((res) =>
      setPosts(posts.map((p) => (p._id === res.data._id ? res.data : p)))
    )
    .catch((err) => console.log(err.message));
};
export const postCommentReply =(data,commentmessage,postId,dataid,senderPic,index,replyComment,setPosts, posts)=>{
console.log();
  axios
    .post(
      `${APICOMMENTREPLY_URL}`,
      {
        data:data,
        reply:commentmessage,
        post_id:postId,
        commentId:dataid,
        senderPic:senderPic,
        index:index
      },
      { withCredentials: true }
    )
    .then((res) => {
      replyComment.value=""
      setPosts(posts.map((p) => (p._id === res.data._id ? res.data : p)));
    })
    .catch((err) => console.log(err.message));

 
 

}


export const postCommentLike =(data,commentmessage,postId,dataid,senderPic,index,replyComment,setPosts, posts,userId)=>{
  // console.log(userId);
    axios
      .post(
        `${APICOMMENTLIKE_URL}`,
        {
          data:data,
          reply:commentmessage,
          post_id:postId,
          commentId:dataid,
          senderPic:senderPic,
          index:index,
          userId:userId
        },
        { withCredentials: true }
      )
      .then((res) => {
        
        setPosts(posts.map((p) => (p._id === res.data._id ? res.data : p)));
      })
      .catch((err) => console.log(err.message));
  
   
   
  
  }
export const commentBox = (
  id,
  message,
  commentInput,
  setcommentmessage,
  setPosts,
  posts
) => {
  if (message === undefined || message === '') {
    toast.warn('Comment box is empty... write something');
  } else {
    axios
      .post(
        `${APICOMMENT_URL}`,
        {
          post_id: id,
          comment: message,
        },
        { withCredentials: true }
      )
      .then((res) => {
        // console.log(res.data);
        commentInput.current.value = '';
        setcommentmessage('');

        setPosts(posts.map((p) => (p._id === res.data._id ? res.data : p)));
      })
      .catch((err) => console.log(err.message));
  }
};

export const reportPost = (data, setPosts, posts) => {
  axios
    .post(
      `${APIREPORT_URL}`,
      {
        data: data,
      },
      { withCredentials: true }
    )
    .then((res) => {
      setPosts(posts.map((p) => (p._id === res.data._id ? res.data : p)));
      toast.success('Reported Successfully');
    })
    .catch((err) => console.log(err.message));
};

export const publishPost = async (user_id, data) => {
  try {
    if (!user_id) throw new Error('cant find user id');
    if (!data.files && data.title === '')
      throw new Error('Image or Message required to post');

    let result;
    if (data.files) {
      const fd = new FormData();
      fd.append('file', data.files);
      fd.append('upload_preset', 'ml_default');
      fd.append('cloud_name', 'buzzz-social-app');
      result = await axios.post(`${API_FEEDFILE_UPLOAD}`, fd);
      result = result.data.secure_url;
    }
    const newPost = { pic_url: result, caption: data.title, user_id };
    !result && delete newPost['pic_url'];
    data.title === '' && delete newPost['caption'];

    await axios.post(APINEWPOST, newPost, { withCredentials: true });
    return { success: 'done' };
  } catch (error) {
    return { error: error.message };
  }
};

import { ajax } from "rxjs/ajax";
import { baseurl, baseUrlNew } from "../misc/misc_const";
import axios from "axios";

export const login = (username, password) => {
  const body = { username, password };
  const url = `${baseurl}/auth/login`;

  return ajax.post(url, body, { 'Content-Type': 'application/json' });
}

export const paginatedProducts = (page, limit) => {
  const url = `${baseurl}/products?limit=${limit}&skip=${(page - 1) * limit}`;
  return axios.get(url);
}



export const getPosts = () => {
  const url = `${baseUrlNew}/posts`;
  return axios.get(url);
}


export const getPostWithComments = async () => {

  
    const response = await axios.get(`${baseUrlNew}/posts`);
    const posts = response.data;
   
    const commentsPost = [];
    for (const post of posts) {
         console.log(post);
      const comments = await getCommentsForPost(post.id);
      commentsPost.push({ post, comments });
    }

    return commentsPost;
}

const getCommentsForPost = async (postId) => {
  return await axios.get(`${baseUrlNew}/posts/${postId}/comments`).then(response => response.data);
}


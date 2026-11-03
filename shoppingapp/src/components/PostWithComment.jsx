import { useEffect, useState } from "react";
import { getPostWithComments } from "../Services/APiService";

const PostWithComment = () => {

   
    
  const [postsWIthData, setPostsWIthData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostWithComments();
      console.log(data);
      if (data) {
        setPostsWIthData(data);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Post With Comment</h1>
      {postsWIthData.map(({ post, comments }) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <h3>Comments:</h3>
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>{comment.body}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default PostWithComment;
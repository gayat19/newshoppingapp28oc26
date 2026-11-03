import { useEffect, useState } from "react";
import { getPosts } from "../Services/APiService";

export default function Posts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
 
    getPosts().then(response => {
      setPosts(response.data);
    }).catch(error => {
      console.error("Failed to fetch posts:", error);
    });

  }, []);



  return (
    <div>
      <h1>Posts Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
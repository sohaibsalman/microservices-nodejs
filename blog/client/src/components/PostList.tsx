import axios from "axios";
import { useEffect, useState } from "react";
import CommentCreate from "./CommentCreate";
import CommentList, { Comment } from "./CommentList";

interface Post {
  id: string;
  title: string;
  comments: Comment[];
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await axios.get("http://posts.com/posts");
    setPosts(Object.values(res.data));
  };

  const renderedPosts = posts?.map((post) => (
    <div
      key={post.id}
      className="card"
      style={{ width: "30%", marginBottom: 20 }}
    >
      <div className="card-body">
        <h3>{post.title}</h3>
        <CommentCreate postId={post.id} />
        <CommentList comments={post.comments} />
      </div>
    </div>
  ));

  return <div className="d-flex flex-wrap gap-3">{renderedPosts}</div>;
};

export default PostList;

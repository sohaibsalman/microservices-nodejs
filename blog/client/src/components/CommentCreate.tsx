import axios from "axios";
import React, { useState } from "react";

const CommentCreate = ({ postId }: { postId: string }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent("");

    location.reload();
  };

  return (
    <form className="form-group" onSubmit={onSubmit}>
      <label className="form-label">New Comment</label>
      <input
        className="form-control mb-3"
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </form>
  );
};

export default CommentCreate;

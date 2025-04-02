import axios from "axios";
import { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");

    location.reload();
  };

  return (
    <form onSubmit={onSubmit} className="mb-3">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          className="form-control"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostCreate;

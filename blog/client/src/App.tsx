import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <PostList />
    </div>
  );
}

export default App;

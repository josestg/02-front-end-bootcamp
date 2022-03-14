import { Fetch } from "../hooks/fetch";
import Post from "../Post/Post";

function Posts() {
  const { state, error, loading } = Fetch(
    "https://jsonplaceholder.typicode.com/posts",
    []
  );

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error != null) {
    return <p>{error.message}</p>;
  }

  return (
    <section>
      <h1>Posts Page</h1>

      {state.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </section>
  );
}

export default Posts;

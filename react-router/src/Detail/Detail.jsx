import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";
import { Fetch } from "../hooks/fetch";

function Detail(props) {
  const { id } = useParams();
  //   const id = params.id;

  const { state, loading, error } = Fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
    {
      title: "",
      body: "",
    }
  );

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error != null) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1>{state.title}</h1>
      <p>{state.body}</p>

      <Comments postID={id} />
    </div>
  );
}

export default Detail;

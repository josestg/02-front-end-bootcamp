import { Fetch } from "../hooks/fetch";
import PropTypes from "prop-types";

function Comments(props) {
  const { postID } = props;

  const { state, loading, error } = Fetch(
    "https://jsonplaceholder.typicode.com/posts/" + postID + "/comments",
    []
  );

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error != null) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      {state.map((comment) => {
        return (
          <div key={comment.id}>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}

Comments.propTypes = {
  postID: PropTypes.string.isRequired,
};

export default Comments;

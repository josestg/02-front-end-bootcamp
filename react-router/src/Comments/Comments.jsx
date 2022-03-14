import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Comments(props) {
  const { postID } = props;

  // kita ingin menyimpan post comments berdasarkan id yang diperoleh dari API.
  const [state, setState] = useState([]);
  // kita akan gunakan object untuk menyimpan informasi errornya
  // ketika terjadi error pada saat call API.
  const [error, setError] = useState(null);
  // kita gunakan boolean untuk mengetahui apakah proses call API
  // sudah selesai atau belum. Pada saat awal loading=true
  // artinya kita sedang dalam proses call API.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/posts/" + postID + "/comments",
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((post) => {
        // setTimeout kita gunakan untuk mensimulasikan loading.
        setTimeout(() => {
          setLoading(false);
          setState(post);
        }, 3 * 1000);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, []);

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
  postID: PropTypes.number.isRequired,
};

export default Comments;

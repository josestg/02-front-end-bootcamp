import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Comments from "../Comments/Comments";

function Detail(props) {
  const { id } = props;

  // kita ingin menyimpan detail post berdasarkan id yang diperoleh dari API.
  const [state, setState] = useState({
    title: "",
    body: "",
  });
  // kita akan gunakan object untuk menyimpan informasi errornya
  // ketika terjadi error pada saat call API.
  const [error, setError] = useState(null);
  // kita gunakan boolean untuk mengetahui apakah proses call API
  // sudah selesai atau belum. Pada saat awal loading=true
  // artinya kita sedang dalam proses call API.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id, { method: "GET" })
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
      <h1>{state.title}</h1>
      <p>{state.body}</p>

      <Comments postID={id} />
    </div>
  );
}

Detail.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Detail;

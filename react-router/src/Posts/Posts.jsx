import { useEffect, useState } from "react";
import Post from "../Post/Post";

function Posts() {
  // kita ingin menyimpan kumpulan post yang diperoleh dari API.
  const [state, setState] = useState([]);
  // kita akan gunakan object untuk menyimpan informasi errornya
  // ketika terjadi error pada saat call API.
  const [error, setError] = useState(null);
  // kita gunakan boolean untuk mengetahui apakah proses call API
  // sudah selesai atau belum. Pada saat awal loading=true
  // artinya kita sedang dalam proses call API.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" })
      .then((response) => response.json())
      .then((posts) => {
        // setTimeout kita gunakan untuk mensimulasikan loading.
        setTimeout(() => {
          setLoading(false);
          setState(posts);
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
    <section>
      {state.map((post) => (
        <Post key={post.id} id={post.id} title={post.title} />
      ))}
    </section>
  );
}

export default Posts;

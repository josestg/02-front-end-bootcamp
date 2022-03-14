import { useEffect, useState } from "react";

function Users(props) {
  // kita ingin menyimpan users berdasarkan id yang diperoleh dari API.
  const [state, setState] = useState([]);
  // kita akan gunakan object untuk menyimpan informasi errornya
  // ketika terjadi error pada saat call API.
  const [error, setError] = useState(null);
  // kita gunakan boolean untuk mengetahui apakah proses call API
  // sudah selesai atau belum. Pada saat awal loading=true
  // artinya kita sedang dalam proses call API.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "GET" })
      .then((response) => response.json())
      .then((users) => {
        // setTimeout kita gunakan untuk mensimulasikan loading.
        setTimeout(() => {
          setLoading(false);
          setState(users);
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
      <h1>Users Page</h1>

      {state.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default Users;

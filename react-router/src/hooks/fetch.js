import { useState, useEffect } from "react";

export function Fetch(endpoint, initial) {
  // kita ingin menyimpan state yang diperoleh dari API.
  const [state, setState] = useState(initial);
  // kita akan gunakan object untuk menyimpan informasi errornya
  // ketika terjadi error pada saat call API.
  const [error, setError] = useState(null);
  // kita gunakan boolean untuk mengetahui apakah proses call API
  // sudah selesai atau belum. Pada saat awal loading=true
  // artinya kita sedang dalam proses call API.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(endpoint, { method: "GET" })
      .then((response) => response.json())
      .then((posts) => {
        // setTimeout kita gunakan untuk mensimulasikan loading.
        setTimeout(() => {
          setState(posts);
        }, 3 * 1000);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    state: state,
    error: error,
    loading: loading,
  };
}

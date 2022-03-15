import { useState, useEffect } from "react";

/**
 * useFetch call apiFetcher.
 * @param {() => Promise<any>} apiFetcher
 * @param {any} initial
 * @returns
 */
export function useFetch(apiFetcher, initial) {
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
    apiFetcher()
      .then((state) => {
        // setTimeout kita gunakan untuk mensimulasikan loading.
        setTimeout(() => {
          setState(state);
        }, 500);
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

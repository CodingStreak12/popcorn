import { useEffect, useState } from "react";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      const controller = new AbortController();
      async function getMovies() {
        try {
          setIsLoading(true);

          setError("");
          const resp = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=4055a0c8&s=${query.toLowerCase()}`,
            { signal: controller.signal }
          );
          if (!resp.ok) {
            throw new Error("Something Went Wrong");
          }

          const data = await resp.json();
          if (data.Response === "False") {
            throw new Error("Movie not found");
          }

          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 2) {
        setMovies([]);
        setError("");
        return;
      }

      getMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}

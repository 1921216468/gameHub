import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genres {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genres[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const contrller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres")
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => contrller.abort();
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;

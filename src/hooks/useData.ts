import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const contrller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchDataResponse<T>>(endpoint, {
          signal: contrller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => contrller.abort();
    },
    deps ? [...deps] : []
  );
  return { data, error, isLoading };
};

export default useData;

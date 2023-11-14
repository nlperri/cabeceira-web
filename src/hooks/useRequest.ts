import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type RequestMethod = "get" | "post" | "put" | "delete";

interface UseAxiosProps<T> {
  initialUrl?: string;
  initialMethod?: RequestMethod;
  initialData?: T;
}

const useAxios = <T>({
  initialUrl,
  initialMethod,
  initialData,
}: UseAxiosProps<T> = {}) => {
  const [data, setData] = useState<T | null>(initialData || null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (
    url: string,
    method: RequestMethod = "get",
    payload?: any
  ) => {
    setLoading(true);
    try {
      const config: AxiosRequestConfig = {
        method,
        url,
        data: payload,
      };

      const response: AxiosResponse<T> = await axios(config);
      setData(response.data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialUrl) {
      fetchData(initialUrl, initialMethod || "get");
    }
  }, [initialUrl, initialMethod]);

  return { data, error, loading, fetchData };
};

export default useAxios;

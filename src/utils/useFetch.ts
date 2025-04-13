import { useState, useEffect, useCallback } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T = any>(
  url: string,
  dependencies: any[] = [],
  enabled: boolean = true
): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(
    async (fetchUrl: string) => {
      if (!enabled) return;

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(fetchUrl);
        if (!response.ok) {
          let errorMessage = `HTTP error! status: ${response.status}`;
          try {
            const errorData = await response.json();
            if (errorData && errorData.message) {
              errorMessage += `, Message: ${errorData.message}`;
            }
          } catch (jsonError) {
            console.error("Error parsing JSON error response", jsonError);
          }
          throw new Error(errorMessage);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err: any) {
        setError(err);
        alert(err.message);
      } finally {
        setLoading(false);
      }
    },
    [enabled]
  );

  // Fetch data on mount and when dependencies change
  useEffect(() => {
    if (enabled) {
      fetchData(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, enabled, fetchData, ...dependencies]); // Include dependencies

  return { data, loading, error };
}

export default useFetch;

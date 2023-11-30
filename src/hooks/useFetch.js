/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export default function useFetch({ queryFn, dependencies = [] }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    setError();
    setData();

    const abortController = new AbortController();

    queryFn({ abortController })
      .then((data) => setData(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, dependencies);

  return { data, loading, error };
}

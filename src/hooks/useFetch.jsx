import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel any ongoing fetch when the component unmounts
    return () => {
      // Implement any cleanup logic here (e.g., aborting ongoing fetch)
    };
  }, [url]); // Only re-run effect if URL changes

  return { data, isLoading, errorMessage };
};

export default useFetch;

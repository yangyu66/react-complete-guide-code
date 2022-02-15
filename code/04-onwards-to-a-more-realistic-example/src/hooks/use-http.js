import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendReq = useCallback(async (reqConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(reqConfig.url, {
        method: reqConfig.method ? reqConfig.method : "GET",
        headers: reqConfig.headers ? reqConfig.headers : {},
        body: JSON.stringify(reqConfig.body)
          ? JSON.stringify(reqConfig.body)
          : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      console.log(err)
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //     sendReq();
  // }, []);
  return {
    isLoading: isLoading,
    error: error,
    sendReq: sendReq,
  };

  
};

export default useHttp;

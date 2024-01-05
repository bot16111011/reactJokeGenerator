import { useState, useEffect } from "react";
// Complete the following hook
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getJoke = async () => {
    setLoading(true);
    try{
      const response = await fetch(url);
      if(response.ok){
        const data = await response.json();
        setData(data);
        setError(null);
      }
      else{
        throw response;
      }
    } catch(e){
      setError(e);
    } finally{
      setLoading(false);
    }
  };
  useEffect(()=>{
    getJoke();
  },[url]);
  return {data,loading,error,getJoke};
  //It should return data returned from fetch, loading, error and getJoke
};
export default useFetch;
// export the useFetch hook as a default export


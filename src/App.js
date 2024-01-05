import "./styles.css";
import useFetch from "./useFetch";
// import the custom hook to use in this document
export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  const {data,loading,error,getJoke} = useFetch(url);
  // Use the custom hook here

  // Display loading text here
  if (loading) return <p>Loading...</p>;

  // Display something went wrong here
  if (error) return <p>Something went wrong</p>;
  
  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      <h2>{data.joke}</h2>
      <button className="btn" onClick={getJoke} >New Joke</button>
    </div>
  );
}


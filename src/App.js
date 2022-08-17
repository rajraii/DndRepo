import { data } from "./data";
import './App.css';
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [result, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    // console.log(process.env.REACT_APP_IMAGE_URL)
    const url = `${process.env.REACT_APP_URL}random?client_id=${process.env.REACT_APP_CLIENT_ID}&count=5`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      }).catch(error => console.log(error));
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      { error? (<>
        <h1>Something went wrong</h1>
      </>) :(
        data.map((item, idx) => (
          <Card item={item} image ={result[idx]} loading={loading} />
        )))
      }

    </div>
  );
}

export default App;

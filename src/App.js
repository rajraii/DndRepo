import { data } from "./data";
import './App.css';
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [result, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const clientId = "XyKWvUzHmOEhx2KtkcXVpVRMPWgeEEDlfqW7OJ2RtNE";
    const url = `https://api.unsplash.com/photos/random?client_id=${clientId}&count=5`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      });
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      {
        data.map((item, idx) => (
          <Card item={item} image ={result[idx]} loading={loading} />
        ))
      }
    </div>
  );
}

export default App;

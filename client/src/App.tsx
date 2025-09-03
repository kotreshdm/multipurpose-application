import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState({
    status: "Loading...",
    db: "loadding...",
    timestamp: "loadding..",
    uptime: "loading....",
  });

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:5000/api/health")
        .then((res) => {
          console.log(res);
          setMessage(res.data);
        })
        .catch((err) => console.error(err));
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Client + Server Demo</h1>
      <p>Backend says: {message.status}</p>
      <p>Backend says: {message.db}</p>
      <p>Backend says: {message.timestamp}</p>
      <p>Backend says: {message.uptime}</p>
    </div>
  );
}

export default App;

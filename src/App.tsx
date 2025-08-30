import axios from "axios";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      setError("");
      const userRes = await axios.get(`https://api.github.com/users/${username}`);
      const reposRes = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`);
      setUser(userRes.data);
      setRepos(reposRes.data);
    } catch (err) {
      setError("Kullanıcı bulunamadı veya rate limit aşıldı.");
      setUser(null);
      setRepos([]);
    }
  };

  return (
    <div className="container">
      {!user && (
        <>
          <h1>GitHub Stats</h1>
          <div className="search">
            <input
              type="text"
              placeholder="GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={fetchData}>Search</button>
          </div>
        </>
      )}
      {error && <p className="error">{error}</p>}

      {user && (
        <>
          <Header user={user} />
          <StatsCards user={user} repos={repos} />
        </>
      )}
    </div>
  );
}

export default App;

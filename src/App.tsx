import axios from 'axios'
import { useEffect, useState, type KeyboardEvent } from 'react'
import './App.css'
import Header from './components/Header'
import StatsCards from './components/StatsCards'

function App() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState<any>(null)
  const [repos, setRepos] = useState<any[]>([])
  const [error, setError] = useState('')

  const fetchData = async () => {
    try {
      setError('')
      const userRes = await axios.get(
        `https://api.github.com/users/${username}`,
      )
      const reposRes = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=100`,
      )
      setUser(userRes.data)
      setRepos(reposRes.data)
    } catch (err) {
      setError('Kullanıcı bulunamadı veya rate limit aşıldı.')
      setUser(null)
      setRepos([])
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: Event) => {
      const keyboardEvent = event as unknown as KeyboardEvent
      if (keyboardEvent.shiftKey && keyboardEvent.key.toLowerCase() === 'r') {
        setUser(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  fetchData();
                  setUsername('');
                }
              }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={(e) => {
              fetchData();
              setUsername('');
            }}>Search</button>
          </div>
        </>
      )}
      {error && <p className="error">{error}</p>}

      {user && (
        <>
          <Header user={user} />
          <StatsCards
            user={user}
            repos={repos}
          />
        </>
      )}
      {user && (
        <header>
          <h1>Github Stats</h1>
          <div>
            Press <code onClick={() => {
              setUser(null);
            }}>Shift + R</code> to view another profile.
          </div>
        </header>
      )}
      <footer>
        Github Stats © Fırat Tuna Arslan 2025.
      </footer>
    </div>
  )
}

export default App

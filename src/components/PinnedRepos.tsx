import { TiStarFullOutline } from "react-icons/ti";
import { VscRepoForked } from "react-icons/vsc";

interface Props {
  repos: any[];
}

export default function PinnedRepos({ repos }: Props) {
  const topRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  return (
    <div>
      <h3>Pinned Repos</h3>
      <div className="pinned-grid">
        {topRepos.map((repo) => (
          <div className="repo-card" key={repo.id}>
            <h4>{repo.name}</h4>
            <p><TiStarFullOutline />  {repo.stargazers_count}  <VscRepoForked />  {repo.forks_count}</p>
            <p>{repo.language}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

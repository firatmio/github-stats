interface Props {
    user: any;
    repos: any[];
}

export default function StatsCards({ user, repos }: Props) {
    const totalCommits = repos.reduce((sum, repo) => sum + (repo?.size || 0), 0);

    return (
        <div className="stats-cards">
            <div className="card">
                <h3>Repos</h3>
                <p>{user.public_repos}</p>
            </div>
            <div className="card">
                <h3>Followers</h3>
                <p>{user.followers}</p>
            </div>
            <div className="card">
                <h3>Following</h3>
                <p>{user.following}</p>
            </div>
            <div className="card">
                <h3>Total Commits</h3>
                <p>{totalCommits}</p>
            </div>
        </div>
    );
}

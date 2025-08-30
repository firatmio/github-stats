
interface Props {
  user: any;
}

export default function Header({ user }: Props) {
  const username: string = user.login;
  const githubURL: string = "https://github.com/"+username
  return (
    <div className="header">
      <img src={user.avatar_url} alt="avatar" />
      <div className="header-info">
        <h2><a href={githubURL} target="blank">{username}</a></h2>
        <p>{user.bio}</p>
        <p>{user.location}</p>
      </div>
    </div>
  );
}

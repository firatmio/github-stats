interface Props {
  user: any;
}

export default function Header({ user }: Props) {
  return (
    <div className="header">
      <img src={user.avatar_url} alt="avatar" />
      <div className="header-info">
        <h2>{user.login}</h2>
        <p>{user.bio}</p>
        <p>{user.location}</p>
      </div>
    </div>
  );
}

import Charts from "./Charts";

interface Props {
  repos: any[];
}

export default function Graphs({ repos }: Props) {
  return (
    <div className="graphs">
      <h3>Repo Stats</h3>
      <Charts repos={repos} />
    </div>
  );
}

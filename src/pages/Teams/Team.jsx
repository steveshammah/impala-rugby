import Table from "../../components/Table/Table";

const Team = ({ group }) => {
  return (
    <div className="team-container">
      <h2>{group}</h2>
      <Table group={group} />
    </div>
  );
};

export default Team;

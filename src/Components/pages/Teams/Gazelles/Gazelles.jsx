import "./gazelles.scss";
import Table from "../../../Table/Table";

const Gazelles = ({ active }) => {
  return (
    <div className={`team-container`} id={`${active}`}>
      <h2>Gazelles</h2>
      <Table group={"gazelles"} />
    </div>
  );
};

export default Gazelles;

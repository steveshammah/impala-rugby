import "./team.scss";
import TeamState from "../../../contexts/team-context";
import Gazelles from "./Gazelles/Gazelles";
import Boks from "./Boks/Boks";
import Ladies from "./Ladies/Ladies";
import AgeGrade from "./AgeGrade/AgeGrade";
import Management from "./Management/Management";

const Teams = ({ match }) => {
  const activeTeam = match.params.name;
  const newStr = activeTeam.charAt(0).toUpperCase() + activeTeam.slice(1);
  // const { activeTeam } = useParams();
  console.log(newStr, "Params", activeTeam);
  const setActiveTeam = () => {
    switch (activeTeam) {
      case "gazelles":
        return <Gazelles />;
      case "boks":
        return <Boks />;
      case "ladies":
        return <Ladies />;
      case "agegrade":
        return <AgeGrade />;
      case "management":
        return <Management />;
      default:
        return <Gazelles />;
    }
  };
  return (
    <TeamState>
      <section className='teams container'>
        <>{() => setActiveTeam(activeTeam)}</>
      </section>
    </TeamState>
  );
};

export default Teams;

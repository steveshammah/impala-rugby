import "./fixtures.scss";
import "../../../Profile/profile.scss";

const Fixtures = ({ active }) => {
  // const currentYear = new Date().getFullYear();

  return (
    <div
      className={`fixtures-container list-container && ${
        active === "fixtures" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Fixtures</h2>
      <table>
        <thead>
          <td>Team</td>
          <td>Match Date</td>
          <td>Venue</td>
          <td>Standings</td>
        </thead>
      </table>
    </div>
  );
};

export default Fixtures;

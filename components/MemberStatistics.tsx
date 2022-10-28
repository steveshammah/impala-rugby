const MemberStatistics = ({ member, activeWindow }) => {
  const display = activeWindow === "statistics" ? true : false;

  return (
    <section
      className='member-statistics'
      style={{ display: display ? "block" : "none" }}>
      {/* <h2>Player Statistics</h2> */}
      <div className='stats-wrapper'>
        <div className='match stats'>
          <h3>Personal Statistics</h3>
          <div>
            <span>
              <strong>DOB:</strong>&nbsp; {member.dob}
            </span>
            <span>
              <strong>Year Joined:</strong>&nbsp; {member.year}
            </span>
            <span>
              <strong>Status: </strong> &nbsp; active
            </span>
          </div>
        </div>
        <div className='performance stats'>
          <h3>Performance Statistics</h3>
          <div>
            <span>
              <strong>Tries:</strong> &nbsp; {member.daysTrained}
            </span>
            {/* <br /> */}
            <span>
              <strong>Penalties:</strong> &nbsp; {member.daysMissed}
            </span>
            <span>
              <strong>Total Points:</strong> &nbsp; {member.daysMissed}
            </span>
          </div>
        </div>

        <div className='appearance stats'>
          <h3>Appearances</h3>
          <div>
            <span>
              <strong>Gazelles:</strong> &nbsp; {member.appearances}
            </span>
            <span>
              <strong>Boks:</strong> &nbsp; {member.daysTrained}
            </span>

            <span>
              <strong>Academy:</strong> &nbsp; {member.daysTrained}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberStatistics;


const MemberStatistics = ({ member, activeWindow }) => {
  const display = activeWindow === "statistics" ? true : false;

  return (
 
      <section
        className='member-statistics'
        style={{ display: display ? "block" : "none" }}>
        <h2>Statistics</h2>
        <div className='stats-wrapper'>
          <div className='training-stats'>
            <h3>Training Statistics</h3>
            <div>
              <span>
                <strong>Days Trained:</strong> {member.daysTrained}
              </span>{" "}
              <br />
              <span>
                <strong>Days Missed:</strong> {member.daysMissed}
              </span>
            </div>
          </div>
          <div className='match-stats'>
            <h3>Match Statistics</h3>
          </div>
          <div className='appearance-stats'>
            <h3>Appearances</h3>
            {member.appearances}
          </div>
        </div>
      </section>

  );
};

export default MemberStatistics;

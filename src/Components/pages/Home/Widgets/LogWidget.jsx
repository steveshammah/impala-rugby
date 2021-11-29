import { logos } from "../../../../resources/resources";

const LogWidget = () => {
  return (
    <div className='next-fixture'>
      <h2>Next Fixture</h2>
      <div className='fixture-details'>
        <div className='team'>
          <img src={logos.impala_logo} alt='' />
          <span>1st</span>
        </div>
        <div className='fixture-meta'>
          <span>
            <i>Venue: </i> <strong>RFUEA Grounds</strong>
          </span>
          <span>
            <i>Kick Off: </i> <strong>1600 EAT</strong>
          </span>
          <span>
            <i>Weather: </i> <strong>Sunny</strong>
          </span>
        </div>

        <div className='team'>
          <img src={logos.impala_logo} alt='' />
          <span>3rd</span>
        </div>
      </div>
    </div>
  );
};

export default LogWidget;

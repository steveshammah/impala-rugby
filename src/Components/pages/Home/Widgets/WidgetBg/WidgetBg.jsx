import { logos } from "../../../../../resources/resources";

const WidgetBg = () => {
  return (
    <div className='widget-big '>
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

      <div className='league-standings'>
        <h2>League Standings</h2>

        <table>
          <thead>
            <th>Team</th>
            <th>Played</th>
            <th>GF</th>
            <th>GA</th>
            <th>Points</th>
          </thead>

          <tr>
            <td>Harlequins</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>HomeBoyz</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr className='impala'>
            <td>Impala</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>KCB</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Kabras</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default WidgetBg;

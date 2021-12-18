import { Button } from "@mui/material";
import { logos } from "../../resources/resources";
import "./landing-page.scss";

const MatchesContainer = () => {
  return (
    <div className='matches-container'>
      <span>
        <h2>Matches</h2> <h4>ALL MATCHES</h4>
      </span>
      <div className='matches-wrapper'>
        <div className='match'>
          <div className='date-details'>
            <h3>KENYA CUP</h3>
            Saturday 11 December 2021 <br />
            15:00, Strathmore, Madaraka
          </div>
          <div className='team-logos'>
            <img src={logos.impalaLogo} alt='' />
            <span>24 - 12</span>
            <img src={logos.impalaLogo} alt='' />
          </div>
          <div className='teams'>
            <span>
              <h3>Strathmore</h3> Vs
              <h3>Impala</h3>
            </span>
            <Button variant='contained' className='btn'>
              Match Results
            </Button>
          </div>
        </div>

        <div className='match'>
          <div className='date-details'>
            <h3>KENYA CUP</h3>
            Saturday 18 December 2021 <br />
            15:00, Impala Grounds
          </div>
          <div className='team-logos'>
            <img src={logos.impalaLogo} alt='' />
            <span>12 - 28</span>
            <img src={logos.impalaLogo} alt='' />
          </div>
          <div className='teams'>
            <span>
              <h3>Impala</h3> Vs
              <h3>Kabras</h3>
            </span>
            <Button variant='contained' className='btn'>
              Match Results
            </Button>
          </div>
        </div>

        <div className='match'>
          <div className='date-details'>
            <h3>KENYA CUP</h3>
            Saturday 10 January 2022 <br />
            15:00, Impala Grounds
          </div>
          <div className='team-logos'>
            <img src={logos.impalaLogo} alt='' />
            <span>15 : 00</span>
            <img src={logos.impalaLogo} alt='' />
          </div>
          <div className='teams'>
            <span>
              <h3>Impala</h3> Vs
              <h3>KCB</h3>
            </span>
            <Button variant='outlined'>Buy Tickets</Button>
          </div>
        </div>

        <div className='match'>
          <div className='date-details'>
            <h3>KENYA CUP</h3>
            Saturday 17 January 2022 <br />
            15:00, Racecourse
          </div>
          <div className='team-logos'>
            <img src={logos.impalaLogo} alt='' />
            <span>15 : 00</span>
            <img src={logos.impalaLogo} alt='' />
          </div>
          <div className='teams'>
            <span>
              <h3>Nondiescript</h3> Vs
              <h3>Impala</h3>
            </span>
            <Button variant='outlined'>Match Center</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesContainer;

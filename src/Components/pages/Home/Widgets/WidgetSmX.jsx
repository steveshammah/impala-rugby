import { CalendarToday, CalendarViewDaySharp } from "@material-ui/icons";
const WidgetSmX = () => {
  return (
    <div className='widget-sm-x'>
      <h2>Upcoming Events</h2>

      <div className='eventsWrapper'>
        <div className='eventContainer'>
          <h4>Meeting with Sponsors</h4>
          <span>
            <strong>Venue:</strong> <i>Hilton Hotel</i>
          </span>
          <span>
            {" "}
            <strong>Event:</strong> <i>Sponsors Meet</i>
          </span>
          <span>
            <CalendarToday className='icon' /> <small> 15/12/2021</small>
          </span>
        </div>
        <div className='eventContainer'>
          <h4>Talent Scouting</h4>
          <div>
            <span>
              <strong>Venue:</strong> <i> Nairobi School</i>
            </span>
            <span>
              <strong>Event:</strong> <i>KSSA 15s tournament</i>
            </span>
            <span>
              <CalendarToday className='icon' /> <small> 4/12/2021</small>
            </span>
          </div>
        </div>

        <div className='eventContainer'>
          <h4>League Update</h4>
          <div>
            <span>
              {" "}
              <strong>Venue:</strong> <i> RFUEA</i>
            </span>
            <span>
              <strong>Event:</strong> <i>Team Briefing</i>
            </span>
            <span>
              <CalendarToday className='icon' /> <small> 29/12/2021</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetSmX;

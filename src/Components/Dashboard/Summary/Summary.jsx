import "./summary.scss";
import {
  Person,
  ArrowDownward,
  ArrowUpward,
  AttachMoney,
} from "@material-ui/icons";

const Summary = () => {
  return (
    <div className='summary-container'>
      <h2>Summary</h2>
      <div className='summary'>
        <div className='summary-meta'>
          <h3>Training</h3>
          <div>
            <Person className='icon ' /> -10
            <ArrowDownward className='icon decrease' />
          </div>
          <span>Compared to last week</span>
        </div>

        <div className='summary-meta'>
          <h3>Ticket Sales</h3>
          <div>
            <AttachMoney className='icon ' /> +10
            <ArrowUpward className='icon increase' />
          </div>
          <span>Compared to last month</span>
        </div>

        <div className='summary-meta'>
          <h3>Merchandise</h3>
          <div>
            <AttachMoney className='icon ' /> -10
            <ArrowDownward className='icon decrease' />
          </div>
          <span>Compared to last month</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;

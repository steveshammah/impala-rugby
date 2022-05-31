import {
  Person,
  ArrowDownward,
  ArrowUpward,
  AttachMoney,
} from "@material-ui/icons";

const SummaryWidget = () => {
  return (
    <div className='summary'>
      <div className='summary-meta'>
        <h3>Training</h3>
        <div>
          <Person className='icon ' /> +10
          <ArrowUpward className='icon increase' />
        </div>
        <span>Compared to last Month</span>
      </div>

      <div className='summary-meta'>
        <h3>Tickets</h3>
        <div>
          <AttachMoney className='icon ' /> +3000
          <ArrowUpward className='icon increase' />
        </div>
        <span>Compared to last month</span>
      </div>

      <div className='summary-meta'>
        <h3>Merchandise</h3>
        <div>
          <AttachMoney className='icon ' /> -1000
          <ArrowDownward className='icon decrease' />
        </div>
        <span>Compared to last month</span>
      </div>
    </div>
  );
};

export default SummaryWidget;

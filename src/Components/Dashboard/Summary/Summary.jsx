import "./summary.scss";
import {
  Person,
  ArrowDownward,
  ArrowUpward,
  AttachMoney,
} from "@material-ui/icons";
import Chart from "../../Chart/Chart";
import WidgetSm from "../Widgets/WidgetSm/WidgetSm";
import WidgetBg from "../Widgets/WidgetBg/WidgetBg";

const Summary = () => {
  const data = [
    {
      Month: "Jan",
      current: 100,
      previous: 70,
      amt: 30,
    },
    {
      Month: "Feb",
      current: 60,
      previous: 100,
      amt: -40,
    },
    {
      Month: "Mar",
      current: 100,
      previous: 60,
      amt: 40,
    },
    {
      Month: "Apr",
      current: 50,
      previous: 100,
      amt: -50,
    },
    {
      Month: "May",
      current: 20,
      previous: 30,
      amt: -10,
    },
    {
      Month: "June",
      current: 50,
      previous: 20,
      amt: 30,
    },

    {
      Month: "Jul",
      current: 80,
      previous: 70,
      amt: 40,
    },
    {
      Month: "Aug",
      current: 60,
      previous: 80,
      amt: -20,
    },
    {
      Month: "Sep",
      current: 90,
      previous: 60,
      amt: 30,
    },
    {
      Month: "Oct",
      current: 30,
      previous: 90,
      amt: -60,
    },
    {
      Month: "Nov",
      current: 70,
      previous: 50,
      amt: 20,
    },
    {
      Month: "Dec",
      current: 80,
      previous: 70,
      amt: 10,
    },
  ];
  return (
    <div className='summary-container'>
      <h2>Summary</h2>
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

      <Chart title={"Training Statistics"} data={data} dataKey={"Month"} />

      <div className='widgets'>
        <WidgetSm />
        <WidgetBg />
      </div>
    </div>
  );
};

export default Summary;

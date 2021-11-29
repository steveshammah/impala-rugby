import "./chart.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";

const LineGraph = ({ title, data, dataKey }) => {
  return (
    <div className='graph'>
      <h3 className='graph-title'>{title}</h3>
      <ResponsiveContainer>
        <LineChart width={500} aspect={4 / 1} data={data}>
          <CartesianGrid />
          {/* <YAxis /> */}
          <XAxis dataKey={dataKey} />
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type='monotone'
            dataKey='previous'
            stroke='#407ba7'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='current' stroke='#a0001c' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;

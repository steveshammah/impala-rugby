import "./chart.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ title, data, dataKey }) => {
  return (
    <div className='chart'>
      <h3 className='chart-title'>{title}</h3>
      <ResponsiveContainer>
        <LineChart width={500} aspect={4 / 1} data={data}>
          <CartesianGrid />
          <XAxis dataKey={dataKey} />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='previous'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='current' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

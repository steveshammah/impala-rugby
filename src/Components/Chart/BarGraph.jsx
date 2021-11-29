import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarGraph = ({ title, data, dataKey }) => {
  return (
    <div className='graph'>
      <h3 className='graph-title'>{title}</h3>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          {/* <CartesianGrid strokeDasharray='3 3' /> */}
          <XAxis dataKey={dataKey} />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey='pv' fill='#ff002b' />
          <Bar dataKey='uv' fill='#1d2537' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;

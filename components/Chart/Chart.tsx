import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  YAxis,
} from "recharts";
import { IGraph } from "./types";

const Chart = ({ title, data, dataKey, type }: IGraph) => {
  return (
    <div className="h-full w-full overflow-hidden p-4 mt-4">
      <h3 className="graph-title text-xl text-whiteX">{title}</h3>

      {type === "line" ? (
        <ResponsiveContainer>
          <LineChart width={500} data={data}>
            <CartesianGrid />

            <XAxis dataKey={dataKey} />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="previous"
              stroke="#407ba7"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="current" stroke="#a0001c" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
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
            }}
          >
            <XAxis dataKey={dataKey} />
            <YAxis />
            <Tooltip />

            <Bar dataKey="pv" fill="#ff002b" />
            <Bar dataKey="uv" fill="#407ba7" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default Chart;

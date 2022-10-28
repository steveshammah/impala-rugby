import React from "react";
import "./chart.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IGraph } from "./types";

const LineGraph = ({ title, data, dataKey }: IGraph) => {
  return (
    <div className="graph">
      <h3 className="graph-title">{title}</h3>
      <ResponsiveContainer>
        {/*  @ts-ignore:next-line */}
        <LineChart width={500} aspect={4 / 1} data={data}>
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
    </div>
  );
};

export default LineGraph;

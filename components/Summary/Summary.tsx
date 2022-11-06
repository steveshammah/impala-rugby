import React from "react";
import { trainingData, salesData } from "../../public/resources/resources";
import Chart from "../Chart/Chart";

import SummaryWidget from "../Widgets/SummaryWidget";

const Summary = () => {
  return (
    <div className="summary-container flex flex-col flex-1  p-2 w-full justify-center items-center">
      <h2 className="w-full text-2xl font-bold py-2">Summary</h2>
      <SummaryWidget />
      <div className="summary-graphs flex h-72  w-full justify-around items-center my-4 bg-blackX rounded-md">
        <div className="w-2/3 h-full flex flex-col justify-around items-center">
          <Chart
            type="line"
            title={"Training Statistics"}
            data={trainingData}
            dataKey={"Month"}
          />
        </div>
        <div className="w-1/3 text-whiteX">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt
            sapiente aspernatur deserunt recusandae id. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Molestiae necessitatibus commodi
            recusandae.
          </p>
        </div>
      </div>

      <div className="summary-graphs flex h-72  w-full justify-around items-center my-4 bg-blackX rounded-md">
        <div className="w-1/3 text-whiteX px-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sunt
            sapiente aspernatur deserunt recusandae id. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Enim rerum fugit ad!
          </p>
        </div>
        <div className="w-2/3 h-full flex flex-col justify-around items-center">
          <Chart
            type="bar"
            title={"Sales Statistics"}
            data={salesData}
            dataKey={"product"}
          />
        </div>
      </div>
    </div>
  );
};

export default Summary;

import BarGraph from "../../../components/Chart/BarGraph";
import Chart from "../../../components/Chart/LineGraph";
import { trainingData, salesData } from "../../../../public/resources/resources";
import SummaryWidget from "../Widgets/SummaryWidget";

const Summary = () => {
  return (
    <div className="summary-container">
      <h2>Summary</h2>
      <SummaryWidget />
      <div className="summary-graphs">
        <Chart
          title={"Training Statistics"}
          data={trainingData}
          dataKey={"Month"}
        />
        <BarGraph
          title={"Sales Statistics"}
          data={salesData}
          dataKey={"product"}
        />
      </div>
    </div>
  );
};

export default Summary;

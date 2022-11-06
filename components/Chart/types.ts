interface IBarGraphData {
  product: string;
  uv: number;
  pv: number;
  amt: number;
}
interface ILineGraphData {
  Month: string;
  current: number;
  previous: number;
  amt: number;
}

type GraphType = "bar" | "line";

export interface IGraph {
  type: GraphType;
  title: string;
  data: IBarGraphData[] | ILineGraphData[];
  dataKey: string;
}

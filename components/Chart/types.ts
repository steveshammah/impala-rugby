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
export interface IGraph {
  title: string;
  data: IBarGraphData[] | ILineGraphData[];
  dataKey: string;
}

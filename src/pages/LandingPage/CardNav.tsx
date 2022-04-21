// import {ArrowForwardIosIcon, ArrowBackIosNewIcon} from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import "./landing-page.scss";

export interface IItem {
  title: string;
  linkName: string;
  url: string;
}
interface ICardNavProps {
  item: IItem;
  changePosition: (direction: string) => void;
  position?: number;
}

const CardNav = ({ item, changePosition }: ICardNavProps) => {
  return (
    <div className="container-nav">
      <span className="nav-title">
        <h2>{item.title}</h2>
        <a href={`/${item.url}`}>
          <h5>{item.linkName}</h5>
        </a>
      </span>
      <div className="nav-btn">
        <ArrowBackIosNewIcon
          className="icon"
          onClick={() => changePosition("-")}
        />
        <ArrowForwardIosIcon
          className="icon"
          onClick={() => changePosition("+")}
        />
      </div>
    </div>
  );
};

export default CardNav;

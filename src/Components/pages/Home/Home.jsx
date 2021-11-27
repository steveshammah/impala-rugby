import TopBar from "./TopBar/TopBar";
import Summary from "./Summary/Summary";
import "./home.scss";

const Home = () => {
  return (
    <div className='container'>
      <TopBar />
      <Summary />
    </div>
  );
};

export default Home;

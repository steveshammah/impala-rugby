import { logos } from "@public/resources/resources";

const LogWidget = () => {
  return (
    <div className="next-fixture flex flex-col h-80 w-full shadow-blackX shadow-2xl py-4 items-center justify-center">
      <h2 className="font-bold text-xl my-4 text-left ">Next Fixture</h2>
      <div className="fixture-details sm:w-4/5 w-full flex flex-1  justify-between items-center">
        <div className="team flex flex-col items-center">
          <div className="bg-white h-28 w-28 rounded-full">
            <img
              src={logos.nondiesLogo.src}
              alt="Home Team"
              className="object-cover h-24 w-24  rounded-full"
            />
          </div>
          <span className="font-bold">7th</span>
        </div>
        <h2 className="text-3xl font-black">VS</h2>
        <div className="team flex flex-col items-center ">
          <div className="bg-white h-24 w-24 rounded-full">
            <img
              src={logos.impalaLogo.src}
              alt=""
              className="object-contain h-full w-full rounded-full"
            />
          </div>
          <span className="font-bold">3rd</span>
        </div>
      </div>
      <div className="fixture-meta flex flex-col items-center justify-evenly  font-italic text-md">
        <span>
          <i>Venue: </i> <strong>Impala Grounds</strong>
        </span>
        <span>
          <i>Weather: </i> <strong>Sunny</strong>
        </span>
        <span>
          <i>Kick Off: </i> <strong>1600 EAT</strong>
        </span>
      </div>
    </div>
  );
};

export default LogWidget;

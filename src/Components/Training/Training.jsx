import "./Training.scss";

export const Training = () => {
  const players = [
    {
      id: 0,
      name: "Steve Shammah",
      training_ratio: "2/4",
      consistency: "average",
      appearances: 60,
      dob: 1996,
    },
    {
      id: 1,
      name: "Tyson Okoth",
      training_ratio: "3/4",
      consistency: "good",
      appearances: 150,
      dob: 1996,
    },
    {
      id: 2,
      name: "Nato Simiyu ",
      training_ratio: "4/4",
      consistency: "exceptional",
      appearances: 400,
      dob: 1986,
    },
    {
      id: 3,
      name: "Dancun Ekasi ",
      training_ratio: "3/4",
      consistency: "good",
      appearances: 600,
      dob: 1986,
    },
    {
      id: 4,
      name: "Sammy Oliech",
      training_ratio: "2/4",
      consistency: "average",
      appearances: 140,
      dob: 1993,
    },
    {
      id: 5,
      name: "Paul Mutsami",
      training_ratio: "3/4",
      consistency: "good",
      appearances: 90,
      dob: 1995,
    },
    {
      id: 6,
      name: "Patrick Mutuku",
      consistency: "poor",
      appearances: 40,
      dob: 1996,
    },
    {
      id: 7,
      name: "Richard Asante ",
      training_ratio: "2/4",
      consistency: "average",
      appearances: 30,
      dob: 1994,
    },
    {
      id: 8,
      name: "Valentino Cosmas ",
      training_ratio: "1/4",
      consistency: "poor",
      appearances: 30,
      dob: 1994,
    },
    {
      id: 9,
      name: "Clinton Musonye",
      training_ratio: "4/4",
      consistency: "exceptional",
      appearances: 10,
      dob: 1995,
    },
    {
      id: 10,
      name: "Martin Juma",
      training_ratio: "1/4",
      consistency: "poor",
      appearances: 10,
      dob: 1995,
    },
    {
      id: 11,
      name: "George Okowa",
      training_ratio: "2/4",
      consistency: "average",
      appearances: 200,
      dob: 1986,
    },
    {
      id: 12,
      name: "Quinto Oongo",
      consistency: "exceptional",
      appearances: 160,
      dob: 1993,
    },
    {
      id: 13,
      name: "Anthony Nyandigisi",
      training_ratio: "1/4",
      consistency: "poor",
      appearances: 200,
      dob: 1986,
    },
    {
      id: 14,
      name: "Martin Musau",
      training_ratio: "3/4",
      consistency: "good",
      appearances: 15,
      dob: 1995,
    },
  ];
  return (
    <div className='training-container'>
      <h2>Traing Summary</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>Consistency</td>
          <td>Average Appearances</td>
          <td>Year of Birth</td>
        </thead>
        {players.map((player) => (
          <tr>
            <td>{player.name}</td>
            <td>
              <span className={player.consistency}></span>{" "}
              <small> {player.training_ratio}</small>
            </td>
            <td>{player.appearances}</td>
            <td>{player.dob}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

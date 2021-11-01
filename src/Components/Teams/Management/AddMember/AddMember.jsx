import "./addmember.scss";
import "../../../Profile/profile.scss";
import { useRef } from "react";

export const AddMember = ({ players, active }) => {
  const formRef = useRef();
  const members = [
    {
      id: 0,
      name: "Steve Shammah",
      dob: "26/2/1996",
      team: "swaras",
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
    {
      id: 1,
      name: "Tyson Okoth",
      dob: "26/2/1996",
      team: "gazelles",
      phone: "795058630",
      email: "shammahranks@gmail.com",
    },
  ];
  const submitHandler = (e) => {
    // e.preventDefault();
    formRef.current.reset();
  };
  return (
    <div
      className={`add-member-container list-container && ${
        active === "addmember" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Add Member</h2>
      <table>
        <thead>
          <td>Player Name</td>
          <td>DOB</td>
          <td>Phone</td>
          <td>Email</td>
          <td>Team</td>
          <td>Join Date</td>
        </thead>
        {members.map((member) => (
          <tr>
            <td>{member.name}</td>
            <td>{member.dob}</td>
            <td>{member.phone}</td>
            <td>{member.email}</td>
            <td>{member.team}</td>
          </tr>
        ))}
        <tr>
          {/* <form ref={formRef}> */}
          <td>
            <input type='text' placeholder='Full name' />
          </td>
          <td>
            <input type='date' placeholder='Date of birth' />
          </td>
          <td>
            <input type='text' placeholder='Phone' />
          </td>
          <td>
            <input type='email' placeholder='Email' />
          </td>
          <td>
            <input type='text' placeholder='Team' />
          </td>
          <td>
            <input type='date' placeholder='Join date' />
          </td>
          {/* </form> */}
        </tr>

        <tr>
          <td>
            <button onSubmit={submitHandler}>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

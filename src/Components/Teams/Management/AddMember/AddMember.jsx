import "./addmember.scss";
import "../../../Profile/profile.scss";
import { useRef, useReducer } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "addMember":
      console.log("ADD PLAYER");
      return {};
    case "deleteMember":
      console.log("DELETE PLAYER");

      return {};
    default:
      return state;
  }
};

const initialState = {
  players: {},
};

export const AddMember = ({ active }) => {
  const formRef = useRef();
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  // const members = [
  //   {
  //     id: 0,
  //     name: "Steve Shammah",
  //     dob: "26/2/1996",
  //     team: "swaras",
  //     phone: "795058630",
  //     email: "shammahranks@gmail.com",
  //   },
  //   {
  //     id: 1,
  //     name: "Tyson Okoth",
  //     dob: "26/2/1996",
  //     team: "gazelles",
  //     phone: "795058630",
  //     email: "shammahranks@gmail.com",
  //   },
  // ];
  const submitHandler = (e) => {
    e.preventDefault();
    // formRef.current.reset();
  };
  return (
    <div
      className={`add-member-container list-container && ${
        active === "addmember" ? "active-link" : ""
      }`}
      id={`${active}`}>
      <h2>Add Member</h2>

      <form ref={formRef} onSubmit={submitHandler}>
        <div className='left-container'>
          <input type='text' placeholder='Full name' />

          <input type='date' placeholder='Date of birth' />

          <input type='text' placeholder='Phone' />

          <input type='email' placeholder='Email' />

          <input type='text' placeholder='Team' />

          <input type='date' placeholder='Join date' />
        </div>
        <div className='right-container'>
          <div className='img'>
            <img src='' alt='Logo' />
          </div>
          <input type='file' placeholder='Upload Image' />
          <button onClick={() => dispatch({ type: "addMember" })}>Add</button>
          <button onClick={() => dispatch({ type: "deleteMember" })}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

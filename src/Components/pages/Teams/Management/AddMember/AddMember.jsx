import "./addmember.scss";
import "../../../Profile/profile.scss";
import { useRef } from "react";

const AddMember = ({ active }) => {
  const formRef = useRef();

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
          <button>Add</button>
          <button>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default AddMember;

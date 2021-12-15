import React from "react";

const style = {
  height: "80vh",
  backgroundColor: "black",
  backgroundAttachment: "fixed",
  color: "white",
  overflow: "hidden",
  cursor: "pointer",
  marginBottom: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const MoreStories = () => {
  return (
    <div className='editors-pick' style={style}>
      <h2>Editor's Pick</h2>
    </div>
  );
};

export default MoreStories;

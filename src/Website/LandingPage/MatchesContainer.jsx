const style = {
  height: "70vh",
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

const MatchesContainer = () => {
  return (
    <div className='matches-container' style={style}>
      <h2>Matches Container</h2>
    </div>
  );
};

export default MatchesContainer;

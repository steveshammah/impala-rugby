import { Container } from "@mui/material";

const MemberSettings = ({ member, activeWindow }) => {
  const display = activeWindow === "settings" ? true : false;

  return (
    <Container maxWidth='sm'>
      <section
        className='memberSettings'
        style={{ display: display ? "block" : "none" }}>
        <h2>MemberSettings</h2>
      </section>
    </Container>
  );
};

export default MemberSettings;

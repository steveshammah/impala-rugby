import { Container } from "@mui/material";

const MemberGallery = ({ member, activeWindow }) => {
  const display = activeWindow === "gallery" ? true : false;

  return (
    <Container maxWidth='sm'>
      <section
        className='memberSettings'
        style={{ display: display ? "block" : "none" }}>
        <h2>Member Gallery</h2>
      </section>
    </Container>
  );
};

export default MemberGallery;

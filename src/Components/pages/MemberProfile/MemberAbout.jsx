const MemberAbout = ({ member, activeWindow }) => {
  const display = activeWindow === "about" ? true : false;
  return (
    <section
      className='member-about'
      style={{ display: display ? "block" : "none" }}>
      <h2>About</h2>
      <div className='member-about-text'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          cupiditate, modi numquam ad illum voluptatem incidunt ut impedit
          similique sed eaque eum consectetur nihil ipsa facilis ipsum officia
          maiores ea expedita accusamus aut odit. Velit sapiente ipsum quia aut
          temporibus autem rerum omnis exercitationem nostrum et, saepe nobis
          sint totam ea hic neque sit fuga voluptates consequuntur. Voluptates,
          minima facere! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Aspernatur numquam tempora iusto voluptates cum praesentium
          obcaecati sint dolorem. Omnis, eius?
        </p>
      </div>
    </section>
  );
};

export default MemberAbout;

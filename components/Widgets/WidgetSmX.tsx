import React, { useState } from "react";

const WidgetSmX = () => {
  // return (
  //   <div className='widget-sm-x'>
  //   </div>
  // );
  // const [expanded, setExpanded] = useState("panel1");
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  return (
    <div className="widget-sm-x">
      <h2>Upcoming Events</h2>
      <div className="eventsWrapper">
        {/* <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}>
          <AccordionSummary
            expandIcon={<CalendarToday />}
            aria-controls='panel1bh-content'
            id='panel1bh-header'>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              <h4>15/12/2021</h4>
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              <h4>Meeting with Sponsors</h4>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>Event:</strong> <i>Sponsors Meet</i>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}>
          <AccordionSummary
            expandIcon={<CalendarToday />}
            aria-controls='panel2bh-content'
            id='panel2bh-header'>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              <h4> 4/12/2021</h4>
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              <h4>Talent Scouting</h4>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>Event:</strong> <i>KSSA 15s tournament</i>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}>
          <AccordionSummary
            expandIcon={<CalendarToday />}
            aria-controls='panel3bh-content'
            id='panel3bh-header'>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              <h4> 29/12/2021</h4>
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              <h4>League Update</h4>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>Event:</strong> <i>Team Briefing</i>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}>
          <AccordionSummary
            expandIcon={<CalendarToday />}
            aria-controls='panel4bh-content'
            id='panel4bh-header'>
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Personal data
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  );
};

export default WidgetSmX;

// <div className='eventsWrapper'>
//   <div className='eventContainer'>
//     <h4>Meeting with Sponsors</h4>
//     <span>
//       <strong>Venue:</strong> <i>Hilton Hotel</i>
//     </span>
//     <span>
//       {" "}
//       <strong>Event:</strong> <i>Sponsors Meet</i>
//     </span>
//     <span>
//       <CalendarToday className='icon' /> <small> 15/12/2021</small>
//     </span>
//   </div>
//   <div className='eventContainer'>
//     <h4>Talent Scouting</h4>
//     <div>
//       <span>
//         <strong>Venue:</strong> <i> Nairobi School</i>
//       </span>
//       <span>
//         <strong>Event:</strong> <i>KSSA 15s tournament</i>
//       </span>
//       <span>
//         <CalendarToday className='icon' /> <small> 4/12/2021</small>
//       </span>
//     </div>
//   </div>

//   <div className='eventContainer'>
//     <h4>League Update</h4>
//     <div>
//       <span>
//         {" "}
//         <strong>Venue:</strong> <i> RFUEA</i>
//       </span>
//       <span>
//         <strong>Event:</strong> <i>Team Briefing</i>
//       </span>
//       <span>
//         <CalendarToday className='icon' /> <small> 29/12/2021</small>
//       </span>
//     </div>
//   </div>
// </div>;

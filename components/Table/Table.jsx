import { DataGrid } from "@material-ui/data-grid";
import { teamContext } from "../../contexts/team-context";
import { useContext } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "daysTrained",
    headerName: "Trained",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "daysMissed",
    headerName: "Missed",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "year",
    headerName: "DOB",
    width: 110,
    editable: true,
  },
  {
    field: "age",
    headerName: "age",
    // type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    // type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",

    width: 200,
    editable: true,
  },

  // const currentYear = new Date().getFullYear();
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, "firstName") || ""} ${
  //       params.getValue(params.id, "lastName") || ""
  //     }`,
  // },
];

const Table = ({ group }) => {
  const { team } = useContext(teamContext);
  const rows = team.filter((member) => member.team === group);
  // console.log(rows);
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={8}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  );
};

export default Table;

import { useState } from "react";
import "./users.scss";
import Add from "../../components/add/Add";
import { userRows } from "../../data";
import  DataTable from "../../components/dataTable/DataTable"


const columns = [
  { field: "id", headerName: "ID", flex:1, minWidth: 50},
  {
    field: "img",
    headerName: "Avatar",
    width:100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width:150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width:150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width:200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width:200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width:200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width:150,
    type: "boolean",
  },
  
];

function Users() {

    const [open, setOpen] = useState(false); /* L'implementer coté js vanilla  */


     // TEST THE API
    //avec la librairie:  @tanstack/react-query  
    //VOir comment il enveloppe dans App.jsx


  // const { isLoading, data } = useQuery({
  //   queryKey: ["allusers"],
  //   queryFn: () =>
  //     fetch("http://localhost:8800/api/users").then(
  //       (res) => res.json()
  //     ),
  // });


    return (
      <div className="users" style={{width:"100%", overflowX:"auto"}}>
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {/* TEST THE API */}

      {/* {isLoading ? (
        "Loading..."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )} */} 
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
    )
  }
  
  export default Users
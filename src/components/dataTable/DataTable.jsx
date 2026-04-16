
import "./datatable.scss";

/* import {DataGrid, GridColDef, GridToolbar} from "@mui/x-data-grid"; */
//ce packet n'est paqs reconnu (GridColDef) Voir plutard comment implementer le tableau 
//@mui/x-data-grid" dans reactJS et que ça soit dynamique

/* import { DataGrid, GridColDef, GridToolbar, } from "@mui/x-data-grid"; */
import { DataGrid, GridToolbar, } from "@mui/x-data-grid";

import { Link } from "react-router-dom";


  // TEST THE API

  // const queryClient = useQueryClient();
  // // const mutation = useMutation({
  // //   mutationFn: (id: number) => {
  // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
  // //       method: "delete",
  // //     });
  // //   },
  // //   onSuccess: ()=>{
  // //     queryClient.invalidateQueries([`all${props.slug}`]);
  // //   }
  // // });



  // NB: on se sert de props dans notre composant DataTable.jsx pour que ça soit dynamique
const DataTable = (props)=> {



        //const handleDelete = (id: number) => {  Typescript
        const handleDelete = (id) => {
        //delete the item
        // mutation.mutate(id)
        };
        
    
        const actionColumn = {
          field: "action",
          headerName: "Action",
          width: 200,
          /* flex:1, */
          /*  minWidth: 100,   Largeur minimal evite la disparation */
          renderCell: (params) => {
            return (
              <div className="action">
                {/* <Link to={`/${props.slug}/${params.row.id}`}> */}
                <Link to={`/${props.slug}/${params.row.id}`}>
                  <img src="/view.svg" alt="" />
                </Link>
                <div className="delete" onClick={() => handleDelete(params.row.id)}>
                  <img src="/delete.svg" alt="" />
                </div>
              </div>
            );
          },
        };
      
    return (
      <div className="dataTable" sx={{width:"100%", overflowX: "auto"}}> {/* Largeur minimal du tableau */}
      <div sx={{minWidth:"600px"}}>
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
      </div>
    
    </div>
    )
  }
  export default DataTable;
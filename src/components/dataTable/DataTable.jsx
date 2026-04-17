
import "./datatable.scss";


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
const DataTable = (props) => {



  //const handleDelete = (id: number) => {  Typescript
  const handleDelete = (id) => {
    //delete the item
    // mutation.mutate(id)
  };


  const columns_Exemplaire = [
    { field: "id", headerName: "ID", width: 50 }, // Fixe pour les petits contenus
    { field: "firstName", headerName: "Prénom", flex: 1, minWidth: 100 }, // S'adapte
    { field: "email", headerName: "Email", flex: 2, minWidth: 150 }, // Prend 2x plus de place
  ];

  const actionColumnAvant = {
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


/*   Au lieu de donner une largeur fixe (width: 200) à toutes vos colonnes, 
  utilisez la propriété flex. Cela permet aux colonnes de s'étirer ou de se réduire 
  pour remplir exactement 100% de l'espace disponible. */
const actionColumn = {
  field: "action",
  headerName: "Action",
  // flex: 1 permet à la colonne de s'étirer ou de se réduire selon l'espace
  flex: 1, 
  // minWidth est CRUCIAL : il empêche les icônes de s'écraser sur petit écran
  minWidth: 100, 
  renderCell: (params) => {
    return (
      <div className="action" style={{ display: "flex", gap: "15px" }}>
        <Link to={`/${props.slug}/${params.row.id}`}>
          <img src="/view.svg" alt="view" style={{ cursor: "pointer" }} />
        </Link>
        <div 
          className="delete" 
          onClick={() => handleDelete(params.row.id)}
          style={{ cursor: "pointer" }}
        >
          <img src="/delete.svg" alt="delete" />
        </div>
      </div>
    );
  },
};

  return (
    <div className="dataTable" sx={{ width: "100%" }}>
      <DataGrid
        className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        autoHeight // Le tableau ajuste sa hauteur selon le contenu

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
  )
}
export default DataTable;
import './products.scss';
import  DataTable from "../../components/dataTable/DataTable"
import { useState } from "react";
import { userRows } from '../../data';



function Products() {


      const columns= [ 
    
        {field: "id", headName: "ID"},
        
        {field: "avatar", headName: "Avatar", width:100,
          renderCell: (params)=> {return <img src={params.row.img || '/noavatar.png'} alt="profil"/>}
        },
    
        {field: "action", headName: "Action", width:100,
          renderCell: (params)=> {
            return  <div className="action">
              <div className="view">View</div>
              <div className="delete">Delete</div>
            </div>
            }
        },
    
        {field: "status", headName: "Status", width: 100, type: "boolean"},
    
        {field: "name", headName: "Nom", editable:true, },
        {field: "lastname", headName: "LastName" },
        {field: "age", headName: "Age"},
        
        /* {field: "fullName",
         headName: "Full Name",
         sortable:false,width:160,
        valueGetter: (params: GridValueGetterParams)=> `${params.row.name || ""}-${params.row.lastname || ""}`,
        }, */
        /* {filed:'age', headName: "Âge",width: 90}, */
    ];
    
       const [rows, setRows] = useState([
        {id:1, name: "Jean",lastname: "Rennes" , age: 12, status:true},
        {id:2, name: "Marie", lastname:"liata", age: 42, status:false},
        {id:3, name: "Ethie", lastname:"Bombi", age: 32},
       ])

    return (
        <div className="products">
                Products
        <DataTable columns={columns} rows={userRows}/>
        </div>
    )
  }
  
  export default Products
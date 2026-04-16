import { useState } from "react";
import "./exe.css";
import { baseUrl } from "../custom_hooks/variabGlobal";
import useFetch from "../custom_hooks/useFetch";
import { Casier } from "./Casier";

export const Exercise = () => {

          const { data, loading, error} = useFetch(`${baseUrl}/products`);
    

          

  return (
    <div className="exercice"> 

        <div className="ParentC"> 
             {loading
                    ? "loading"
                    : data &&
                      data.map((produit) => (
                        <Casier  produit={produit} key={produit._id}/>
                      ))}
            
        </div>
    
   
    </div>
  )
}

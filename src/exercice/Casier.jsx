import { Link, useNavigate } from "react-router-dom";
import "./exe.css";
import { useState } from "react";
import { Checkout } from "./checkout";


export const Casier = ({ produit }) => {

    const navigate = useNavigate();

        const [openCheckout ,setOpenCheckout] = useState(false);
            
         function formatNumber (num){
            return num.toLocaleString('de-DE',{
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });  // 'de-DE pour format avec points'
        }


    return (
            <>
            <Link className="lien cardBusiness casier">
            <img  src={produit.img ?  `http://localhost:8080/images/${user.img}` 
            : "/boisson/maltina.jpeg"} alt="" 
            style={{cursor:"pointer"}}
            onClick={() => navigate(`/profile/${user._id}`)}
            />
                <div className="details_agent">
                    <h2 className="businesCategory"> { formatNumber(produit.fullCasePrice)} fc </h2> 
                   {/*  <h2 className="businesCategory"> { produit.fullCasePrice}  </h2>  */}
                    <h2 className="businesName">{produit.name}</h2>
                    <h2 className="businesAddress">{produit.desc}</h2>
                    <button onClick={() => setOpenCheckout(!openCheckout)}>Vendre</button>
                </div>
        </Link>

       {openCheckout && <Checkout setOpenCheckout={setOpenCheckout}/>} 
           
        </>
    )
}

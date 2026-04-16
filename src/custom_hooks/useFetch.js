import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (url) => {

    const [data, setData] = useState([]);   
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
       /*  const fetchData = async () => {
          setLoading(true);
          try {
            const res = await axios.get(url,{
             // headers:{"Accept": "application/json"}
             headers: {
              'content-Type': "application/json",   
          },
            });
            setData(res.data);
          } catch (err) {
            setError(err);
          }
          //finally
          setLoading(false);
        }; */

        const fetchData = async () => {
          setLoading(true);
          try {
            const res = await fetch(url,{
                  headers: {
                      'content-Type': "application/json",   
                      "Accept": "application/json"
                  },
                  method: "GET",         
              });
              const datas = await res.json();
              setData(datas);
            } catch (err) {
              setError(err);
            }
            //finally
            setLoading(false);
        };

        fetchData();
      }, [url]);  //L'url est en dependance cad si une valeur de l'url change bah on rafraichi la page
                  //L'url réel en dependance joue un rôle vraiment important pour pouvoir chercher en temps réel

      const reFetch = async () => {
        setLoading(true);
        try {
          const res = await axios.get(url);
          setData(res.data);
        } catch (err) {
          setError(err);
        }
        setLoading(false);
      };
    
      return { data, loading, error, reFetch };  //{data:data, loading: loading etc...}






};

export default useFetch;
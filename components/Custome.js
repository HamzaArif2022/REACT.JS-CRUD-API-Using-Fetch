import { useEffect,useState } from "react";
import React from "react";

//we use a custome Hook for resuable code for feching json 
 const useFetching=(url)=>{
    const [Data,SetData]=useState(null)
    const  [loading,setloading]=useState(true)
    const [Error,setError]=useState(null);
    useEffect(()=>{ 
        setTimeout(() => {
            fetch(url)
            .then(obj =>{
                if (!obj.ok) {
                    throw Error("the fetching  url it's not working ");
                    
                }
             return obj.json();//return data in string
            
        })
            .then(Data =>{
             SetData(Data)/// affected data array  to the initaile value blogs after the we
             // boucle the array in nother page map
            setloading(false);
            setError(null);
    })
    .catch((err)=>{
        setloading(false)
        setError(err.message)
    })
      
        },1000); 
        
    }, [url])//while the url has beeing rerender  the fetch also called to fetch ULr
     
     return { loading, Error, Data };//return an object in the end of the function 
    // the has the parametres for using the them in any componemnt we want
    
}
export default useFetching; 
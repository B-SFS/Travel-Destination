import React from "react";

let Tour = (prop) =>{
    return(
   <>
   {
       prop.Data.map(city =>{
           return(
            <div key={city.id}>
            <h2>{city.name}</h2>
            <img src={city.image} alt={city.name+"image"} />
            </div>
           )
       })
   }
   </>
    )

}

export default Tour;
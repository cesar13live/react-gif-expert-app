// import React, { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({ category }) => {

  const {images,isLoading} = useFetchGifs(category);
  console.log({isLoading}); 

  



  // console.log(getGifs(category));

  return (
    <>
      <h3>{category}</h3>
      {
        isLoading 
        ? (<h2>Loading...</h2>) 
        : null
      
      }

      <div className="card-grid"> 
        {

        images.map((images) => (
          <GifItem 
          key={images.id}
          {...images}
          />
        ))

        }
      </div>
    </>
  )
};


 
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {

  const {images,isLoading}=useFetchGifs(category);
  console.log({isLoading})

  return ( 
  <>
    <h3>{category}</h3>
    {//esto es para mandar el mensaje de cargando...
      isLoading && (<h2>Cargando...</h2>)//este es un if corto, los parentesis se ejecutan si la condicion es verdadera, sino no ejecuta nada
    }

    <div className="card-grid">
    {
      //Una forma
      // images.map((image) => ( //el image es el nombre que le damos
      //   <li key={image.id}>{image.title}</li>//el key es el numero del puesto, osea el 1, 2, 3, y asi
        
      // ))
      //Otra forma, mas corta
      images.map((image)=>(//desestructuro lo que necesito
        // <li key={id}>{title}</li>
        <GifItem //aqui mediante el llamado a este componente se le pueden mandar las props que necesitamos en el codigo del componente
          key={image.id}
          //se pueden mandar los que vamos a usar asi
          // title={image.title} 
          // url={image.url} 
          //pero si se manda asi se van a usar todas las que se necesiten sin especificar como arriba
          {...image }
          />
      ))
    } 
    </div>


  </>
  )
}

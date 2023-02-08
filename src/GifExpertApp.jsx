import {useState} from 'react';
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['Dragon Ball']);
  
    const onAddCategory = (newCategory)=>{
        //console.log(newCategory);//con el console.log se puede ver que es lo que manda la funcion, para corroborar
        //categories.push('Naruto');
        //el setCategories es para cambiar el categories

        if(categories.includes(newCategory)) return; //aqui le estamos indicando que con el .includes si en el categories esta incluido o si existe el newCategory
        setCategories([newCategory,...categories]);//con los tres punticos y el nombre siguiete lo que hace es que clone el array categories y despues de la coma se pone el elemento nuevo que vamos a insertar en el array
        //setCategories( cat => [...cat,'Valorant']);//aqui con el cat y la flecha lo que hacemos es darle un nuevo nombre a categories mediante esta forma, para luego decirle que clone los elementos de categories y le añada un tercer elemento que es valorant
    }
    
    return (
    <>
        <h1>GifExpertApp</h1>


        <AddCategory 
            onNewCategory={value=>onAddCategory(value)}
        />

        
        {
            categories.map((category) => ( 
                // return <li key={category}>{category}</li>
                <GifGrid 
                    key={category} 
                    category={category}/>
            ))
        } 
        
    </>
  )
}

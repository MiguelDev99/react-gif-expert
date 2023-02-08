import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange=({target})=>{
    setInputValue(target.value);
  };

  const onSubmit=(event)=>{
    event.preventDefault();//para evitar que el form recargue toda la pagina
    if(inputValue.trim().length <= 1) return;//con esto le decimos que quite los espacios con el .trim, y con la condicion se dice que la palabra que se vaya a ingresar tiene que tener por lo menos dos caracteres para buscar
    //setCategories(categories => [inputValue, ...categories]);//el primer categories nos indica que vamos a tomar esa funcion y le vamos a añadir o a sumar otro elemento, se pone la funcion, luego con una flecha y luego corchetes, dentro se pone la funcion que modifica la funcion anterior, osea ambos del Hook, despues de poner dentro la funcion que modifica la otra funcion, se pone una coma, tres puntos y la funcion principal del hook, recordemos que asi se clonan los elementos de una funcion u objeto
    
    onNewCategory(inputValue.trim());
    setInputValue('');//aqui cuando el usuario escriba y de enter, se borra y queda en blanco el input
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

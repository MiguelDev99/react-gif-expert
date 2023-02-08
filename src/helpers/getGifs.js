export const getGifs = async(category) => {
    const url=`https://api.giphy.com/v1/gifs/search?api_key=moZV8dFbsT1NNrgcBCtrhaviaxtoFBrF&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();//aca estamos desestructurando la info de la imagen y tomando la data que es la que nos interesa
  
    const gifs=data.map(img => ({//el map sirve para coger la data y hacer un nuevo array que se va a llamar gifs
      id: img.id,//y con este objeto le dice exactamente que coger de la data como se van a llamar
      title: img.title,
      url: img.images.downsized_medium.url//aqui despues de cada punto le dice en que carpeta por decirle asi va a tomar la propiedad final que es la url que esta dentro de dowsized.medium, y que esta dentro de images
    }));
    
    
    return gifs;
  }
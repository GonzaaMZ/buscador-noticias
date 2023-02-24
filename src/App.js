import { Fragment, useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoNoticias from "./components/ListadoNoticias";


function App() {

  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {

    const consultarAPI = async () => {
      const apiKey = process.env.REACT_APP_API_KEY_NEWS;
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=${apiKey}`

      const response = await fetch(url);
      const result = await response.json()
     setNoticias(result.articles)
    }
    consultarAPI();
  }, [categoria])

  return (
      <Fragment>
        <Header titulo="Buscador de Noticia"/>

        <div className="container white"> 
          <Formulario
          setCategoria={setCategoria}
          />
          <ListadoNoticias
          noticias={noticias}
          />
        </div>
      </Fragment>
    );
}

export default App;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Filme = () => {
  const { id } = useParams();
  const [dados, setdados] = useState({});
  const [erro, seterro] = useState(false);

  useEffect(() => {
    async function api() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ba33cff3759d4ec7af896c7d8752f4ca`
      );
      console.log(response);
      if (!response.ok) {
        seterro(true);
      } else {
        const data = await response.json();
        setdados(data);
      }
    }

    api();
  }, [id]);

  return (
    <div>
      {erro ? (
        <h1>Filme não encontrado!</h1>
      ) : (
        <div>
          <h1>{dados.title}</h1>
          <p>{dados.overview}</p>
        </div>
      )}
    </div>
  );
};

export default Filme;

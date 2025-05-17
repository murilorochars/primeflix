import React from "react";
import { useState, useEffect } from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

const home = () => {
  const [dados, setdados] = useState([]);
  const [erro, seterro] = useState(false);

  useEffect(() => {
    async function api() {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=ba33cff3759d4ec7af896c7d8752f4ca"
      );
      if (!response.ok) {
        seterro(true);
      } else {
        const data = await response.json();
        setdados(data.results);
      }
    }

    api();
  }, []);

  return (
    <div>
      {erro ? (
        <div>
          <h1>❌ Ops, algo deu errado!</h1>
          <p>Tente novamente mais tarde.</p>
        </div>
      ) : (
        <div className={styles.content}>
          {dados.map((e) => {
            return (
              <article className={styles.container} key={e.id}>
                <div className={styles.card}>
                  <h1>{e.title}</h1>
                  <img
                    className={styles.img}
                    src={`https://image.tmdb.org/t/p/original/${e.poster_path}`}
                    alt={e.title}
                  />
                  <p>
                    <Link to={"/filmes/" + e.id}>Acessar</Link>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default home;

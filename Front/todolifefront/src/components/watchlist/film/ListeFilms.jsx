import { useEffect, useState } from "react";

import { API_FILMS } from './../../../constant/API_BACK';
import React from "react";
import { URL_MODIF_FILM } from "./../../../constant/URL_CONST";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ListeFilms = () => {
  var idUtilisateur = localStorage.getItem("id");
  const history = useHistory();
  const [ListeFilm, setListeFilm] = useState([]);

  useEffect(() => {
    axios
      .get(API_FILMS + "/utilisateurs/" + idUtilisateur)
      .then(function (response) {
        if (response.status === 200) {
            setListeFilm(response.data);
            // eslint-disable-next-line array-callback-return
            ListeFilm.map((Film, i) => {
            console.log(Film);
          });

          console.log(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    
      <div className="row w-100 m-auto justify-content-around">
        {ListeFilm.map((films, i) => (
          <>
            <div className="ajout-film row mb-1">
              <div
                className="titre-film col-8 col-md-10 col-lg-10"
                onClick={() => {
                  let filmEnQuestion = {
                    avis: films.avis,
                    idFilm: films.idFilm,
                    moment: films.moment,
                    name: films.name,
                  };

                  history.push({
                    pathname: URL_MODIF_FILM,
                    filmEnQuestion: filmEnQuestion,
                  });
                }}
              >
                <span className="text-white">{films.name}</span>
              </div>   
              <div className="icone-suppr-edit col-4 col-lg-2 col-md-2">
                <button
                  className="boutton-supprimer"
                  onClick={() => {
                    axios({
                      method: "delete",
                      url: API_FILMS + "/" + films.idFilm,
                    })
                      .then(function (reponse) {
                        //On traite la suite une fois la réponse obtenue
                        console.log(reponse);
                      })
                      .catch(function (erreur) {
                        //On traite ici les erreurs éventuellement survenues
                        console.log(erreur);
                      });
                    window.location.reload();
                  }}
                ></button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default ListeFilms;

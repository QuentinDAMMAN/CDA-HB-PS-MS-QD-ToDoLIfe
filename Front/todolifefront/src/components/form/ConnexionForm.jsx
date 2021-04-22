import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { URL_HOME } from "../../shared/constant/URL_CONST.js";
import "./FormStyle.css";
import axios from "axios";
import { API_LOGIN } from "../../shared/constant/API_BACK.js";

const yup = require("yup");
require("yup-password")(yup);

const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .required()
    .min(2, "Trop court!")
    .max(20, "Trop long!")
    .required("champ oblligatoire"),

  password: yup
    .string()
    .required("champ obligatoire")
    .minUppercase(1, "1 majuscule minimum")
    .minNumbers(1, "1 chiffre minimum")
    .min(6, "6 caractères minimum."),
});

function ConnexionForm() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const handleFormSubmit = async (data) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify(data);
    axios.post(API_LOGIN, body, config).then((res) => {

      localStorage.setItem("id", res.data.user.id);
      localStorage.setItem("username", res.data.user.username);
      localStorage.setItem("token", res.data.user.token);
    });
    
    history.push(URL_HOME);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="form">
      <h2>Bienvenue</h2>

      <div>
        <input
          {...register("username")}
          placeholder="nom d'utilisateur"
          className="form-input"
        />
        {errors.username && <p className="error">{errors.username.message}</p>}
      </div>

      <div>
        <input
          {...register("password")}
          placeholder="mot de passe"
          className="form-input"
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
      </div>

      <input type="submit" value="se connecter" className="btn-form" />
    </form>
  );
}

export default ConnexionForm;

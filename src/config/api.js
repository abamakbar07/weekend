import axios from "axios";

export const API = axios.create({
  baseURL: "https://wknd-take-home-challenge-api.herokuapp.com/",
});


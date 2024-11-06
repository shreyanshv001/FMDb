import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDdkZWFjOWQ1Mjc5NGQ5OGVkNGYxYzNjZDQ3N2EwMiIsIm5iZiI6MTcyNjY4NTkyMS4wMzM0NzQsInN1YiI6IjY2ZWIyMTA1MWJlY2E4Y2UwN2QzYTk3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VjJbkqxtMecNXgoQ3y78zDZC7MEJy3D4WglEwI61-aE",
  },
});

export default instance;

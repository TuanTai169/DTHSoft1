export const BASE_API_URL =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "https://dth-soft-app.herokuapp.com/api"

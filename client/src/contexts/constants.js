export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "some-deploy-url"
export const LOCAL_STORAGE_TOKEN = "user-token"

export let apiBaseUrl: string;

if (process.env.NODE_ENV === "development") {
  apiBaseUrl = "http://localhost:3000/api";
}
if (process.env.NODE_ENV === "production") {
  apiBaseUrl = "/api";
}

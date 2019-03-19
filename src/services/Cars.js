import axios from "axios";
const http = axios.create({
  baseURL: "http://localhost:3000/API" // ovo je bazni url na koji pozivam
});

export default class Cars {
  get(url) {
    return http.get(url);
  }

  getCars() {
    return this.get("/cars"); // da ovde ne moram da kucam celu putanju
  }

  post(url) {
    return http.post(url, body);
  }
  add(car) {
    return http.post("/cars", car);
  }
}

export const cars = new Cars();

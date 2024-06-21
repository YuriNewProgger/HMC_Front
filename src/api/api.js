export const server = process.env.NODE_ENV === "development" ? `http://127.0.0.1:8000` : "http://192.168.1.35:8000"; //адрес сервера

//const token = 'Bearer token from server';
//fetch(fetchURL, {method: "GET", headers: {"Accept": "application/json", "authorization" : token}})
// Working with APIs
// We need to answer the following questions
// - What is the endpoint (URL)?
// - What query string/parameters do we need to provide?
//      - What are required parameters?
//      - What optional parameters do we want to add?

let url = "https://restcountries.eu/rest/v2/name/";
let query = "Malaysia";

function jsonRespone(respone) {
  return respone.json();
}

function handleData(data) {
  console.log(data);
}

fetch(url + query, { method: "GET" })
  .then(jsonRespone)
  .then(handleData);

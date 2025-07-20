import axios from "axios";

function getAllNumbers() {
  return axios
    .get("http://localhost:3000/persons")
    .then((Response) => Response.data);
}

function addNumber(newPerson) {
  axios
    .post("http://localhost:3000/persons", newPerson)
    .then((Response) => console.log(Response));
}

export { getAllNumbers, addNumber };

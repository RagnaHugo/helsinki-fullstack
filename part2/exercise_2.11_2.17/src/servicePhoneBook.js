import axios from "axios";

function getAllNumbers() {
  return axios
    .get("http://localhost:3000/persons")
    .then((Response) => Response.data);
}

function addNumber(newPerson) {
  return axios.post("http://localhost:3000/persons", newPerson);
}

function deleteNumber(idPerson) {
  return axios.delete(`http://localhost:3000/persons/${idPerson}`);
}

function putNumber(idPerson, newData) {
  return axios.put(`http://localhost:3000/persons/${idPerson}`, newData);
}

export { getAllNumbers, addNumber, deleteNumber, putNumber };

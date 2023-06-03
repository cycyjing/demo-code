import axios from "axios";

const baseUrl = "http://localhost:3002";
const customers = "customers";
const opportunities = "opportunities";

export const getAllCustomers = async () => {
  return await axios
    .get(`${baseUrl}/${customers}`)
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
    });
};

export const patchStatusChange = async (id, status) => {
  await axios
    .patch(`${baseUrl}/${customers}/${id}`, { status })
    .then((res) => {
      console.log("res", res);
    })
    .catch((error) => {
      console.error(error);
    });
};


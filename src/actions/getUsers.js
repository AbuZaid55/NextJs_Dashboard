import axios from "axios";
export default async function getUsers() {
  try {
    const response = await axios.get("http://localhost:3000/api/getusers");
    return response.data;
  } catch (error) {
    return error
  }
}
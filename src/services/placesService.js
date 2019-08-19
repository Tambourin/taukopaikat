import axios from "axios";

const getAll = async () => {
  const response = await axios.get("http://localhost:3001/places");
  
  return response.data;
}

export default { getAll };
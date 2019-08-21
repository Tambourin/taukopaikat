import axios from "axios";

const getAll = async () => {
  const response = await axios.get("http://localhost:3001/places");
  return response.data;
};

const getOneById = async (id) => {
  const response = await axios.get("http://localhost:3001/places/" + id);
  return response.data;
}

const update = async place => {
  const response = await axios.put(
    "http://localhost:3001/places/" + place.id,
    place
  );
  return response.data;
};


export default { getAll, getOneById, update };

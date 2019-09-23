import axios from "axios";

const getAll = async () => {
  const response = await axios.get("http://localhost:3001/api/places");  
  return response.data;
};

const getOneById = async (id) => {
  const response = await axios.get("http://localhost:3001/api/places/" + id);
  return response.data;
}

const postPlace = async (place) => {
  const response = await axios.post("http://localhost:3001/api/places/", place);
  return response.data;
}

const postComment = async (placeId, comment) => {
  const response = await axios.post(`http://localhost:3001/api/places/${placeId}/comments`, comment);  
  return response.data;
}

const update = async place => {  
  const response = await axios.put(
    "http://localhost:3001/api/places/" + place.id,
    place
  );
  return response.data;
};


export default { getAll, getOneById, postComment, update, postPlace };

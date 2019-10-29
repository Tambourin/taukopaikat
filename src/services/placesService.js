import axios from "axios";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://taukopaikat-backend.herokuapp.com/api/places"
    : "http://localhost:3001/api/places";

const setToken = token => {
  axios.defaults.headers.post["Authorization"] = "bearer " + token;
  axios.defaults.headers.put["Authorization"] = "bearer " + token;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getOneById = async id => {
  const response = await axios.get(`http://localhost:3001/api/places/${id}`);
  return response.data;
};

const getGoogleDataByPlaceId = async id => {
  const response = await axios.get(
    `http://localhost:3001/api/places/${id}/google`
  );
  return response.data;
};

const postPlace = async place => {
  const response = await axios.post("http://localhost:3001/api/places/", place);
  return response.data;
};

const postComment = async (placeId, comment) => {
  const response = await axios.post(
    `http://localhost:3001/api/places/${placeId}/comments`,
    comment
  );
  return response.data;
};

const postImage = async (placeId, imageData) => {
  const response = await axios.post(
    `http://localhost:3001/api/places/${placeId}/images`,
    { imageData: imageData }
  );
  return response.data;
};

const addVote = async placeId => {
  const response = await axios.post(
    `http://localhost:3001/api/places/${placeId}/votes`
  );
  return response.data;
};

const removeVote = async placeId => {
  const response = await axios.delete(
    `http://localhost:3001/api/places/${placeId}/votes`
  );
  return response.data;
};
/*
const update = async place => {
  const response = await axios.put(
    "http://localhost:3001/api/places/" + place.id,
    place
  );
  return response.data;
};
*/

export default {
  getAll,
  getOneById,
  postComment,
  postPlace,
  getGoogleDataByPlaceId,
  postImage,
  setToken,
  addVote,
  removeVote
};

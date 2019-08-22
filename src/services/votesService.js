const localStorage = window.localStorage;

const VOTES = "VOTES";

const setObject = (key, objectToBeSaved) => {
  localStorage.setItem(key, JSON.stringify(objectToBeSaved));
}

const getObject = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

const save = (place) => {
  try {
    let localStorageVotes = getObject(VOTES);
    if (!localStorageVotes) {
      localStorageVotes = [];
    }
    setObject(VOTES, [ ...localStorageVotes, place]);
  } catch {
    console.log("Tietojen tallennus localStorageen ei onnistunut");
  }
  
}

const remove = (place) => {
  const localStorageVotes = getObject(VOTES);
  const newLocalStorageVotes = localStorageVotes.filter(p => p.id !== place.id)
  setObject(VOTES, [...newLocalStorageVotes]);
}

const getAll = () => {
  return getObject(VOTES);
}
export default { save, remove, getAll };
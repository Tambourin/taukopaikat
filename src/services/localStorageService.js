const localStorage = window.localStorage;

const saveVote = (roadNumber, place) => {
  const previouslyVotedPlace = localStorage.getItem(roadNumber);
  console.log(previouslyVotedPlace);
  localStorage.setItem(roadNumber, place.id);
}

export default { saveVote };
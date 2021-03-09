
window.onload = (event) => {
  console.log('page is fully loaded')
  fetchAlbums()
  countUnique()
  listAlbum() 
} 
function fetchAlbums(){
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "8f71655ac4mshdc27c251995e412p120d4fjsn22524e238bc2",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
  })
  .then(response =>response.json())
  .then(data=>console.log(data))

  // const playApi =  document.getElementById("playapi")
  // json.forEach( music =>{
    // const listelemement = document.createElement("li")
    // const textnode =document.createTextNode(music.preview)
  //   console.log(music[0][1])
  // }

  // )
  .catch(err => {
    console.error(err);
  });
}
function listAlbum(){
  fetch(" https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "8f71655ac4mshdc27c251995e412p120d4fjsn22524e238bc2",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
  })
  .then(response =>response.json())
  .then(data=>console.log(data))

  // const playApi =  document.getElementById("playapi")
  // json.forEach( music =>{
    // const listelemement = document.createElement("li")
    // const textnode =document.createTextNode(music.preview)
  //   console.log(music[0][1])
  // }

  // )
  .catch(err => {
    console.error(err);
  });
}
function countUnique(){
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "8f71655ac4mshdc27c251995e412p120d4fjsn22524e238bc2",
      "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    }
  })
  .then(response =>response.json())
  .then(data=>console.log(data))

  // const playApi =  document.getElementById("playapi")
  // json.forEach( music =>{
    // const listelemement = document.createElement("li")
    // const textnode =document.createTextNode(music.preview)
  //   console.log(music[0][1])
  // }

  // )
  .catch(err => {
    console.error(err);
  });
}



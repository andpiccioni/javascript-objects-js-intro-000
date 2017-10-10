var playlist = { pink_floyd : "the wall" }

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
updatePlaylist(playlist, "Celentano", "Azzurro")
updatePlaylist(playlist, "Slowdive", "Beat it")

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
removeFromPlaylist(playlist, "pink_floyd");

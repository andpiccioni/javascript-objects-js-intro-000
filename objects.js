var playlist = { pink_floyd : "the wall" }

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}
updatePlaylist(playlist, "Celentano", "Azzurro")
updatePlaylist(playlist, "Slowdive", "Beat it")

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
}
removeFromPlaylist(playlist, "Slowdive");

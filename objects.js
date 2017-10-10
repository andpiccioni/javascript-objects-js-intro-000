var playlist = { pink_floyd : "the wall" }

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}
updatePlaylist(playlist, "Celentano", "Azzurro")

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  return playlist
}
removeFromPlaylist(playlist, "pink_floyd")

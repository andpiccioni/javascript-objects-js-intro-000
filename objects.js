var playlist = { pink_floyd : "the wall" }

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}
updatePlaylist(playlist, "Celentano", "Azzurro")

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
}
removeFromPlaylist(playlist, "Celentano")

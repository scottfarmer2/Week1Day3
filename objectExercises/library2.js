var library = {
 tracks: { t01: { id: "t01",
                  name: "Code Monkey",
                  artist: "Jonathan Coulton",
                  album: "Thing a Week Three" },
           t02: { id: "t02",
                  name: "Model View Controller",
                  artist: "James Dempsey",
                  album: "WWDC 2003"},
           t03: { id: "t03",
                  name: "Four Thirty-Three",
                  artist: "John Cage",
                  album: "Woodstock 1952"}
         },
 playlists: { p01: { id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
                   },
              p02: { id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
                   },
            },


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 track


printPlaylists: function () {

var playlists = this["playlists"];

 for (var playListKey in playlists){
   console.log(playListKey + ": " + playlists[playListKey]["name"] + " - " + playlists[playListKey]['tracks'].length);

 }
},


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

printTracks: function () {

var tracks = this["tracks"];

 for (var trackKey in tracks){
   console.log(trackKey + ": " + tracks[trackKey]["name"] + " by " + tracks[trackKey]['artist'] + " (" + tracks[trackKey]['album'] + ")");

 }
},

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

printPlaylist: function (playlistId) {
 var arrayOfTracks = this.playlists[playlistId]["tracks"];

 console.log(playlistId + ": " + this.playlists[playlistId]["name"] + " - " + this.playlists[playlistId]['tracks'].length);
 for(var i = 0 ; i < arrayOfTracks.length ; i++ ){

   var track = this.tracks[arrayOfTracks[i]];
   console.log(track["id"] + ": " + track["name"] + " by " + track["artist"] + "(" + track["album"] + ")" );
 }

},

// adds an existing track to an existing playlist
//add track 2 to playlist 2

addTrackToPlaylist: function (trackId, playlistId) {

  var arrayOfTracks = this.playlists[playlistId]["tracks"];

  arrayOfTracks.push(trackId);

  return arrayOfTracks;
},

// generates a unique id
// (use this for addTrack and addPlaylist)

uid: function() {
 return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
},


// adds a track to the this.

addTrack: function (name, artist, album) {

  var randomUid = this.uid();

  this.tracks[randomUid] = {
    id: randomUid,
    name: name,
    artist: artist,
    album: album,
  },
console.log(this.tracks[randomUid]);
},
// addTrack("Miami", "Will Smith", "Miami");

// // adds a playlist to the this.

addPlaylist: function (name) {

  var randomUid = this.uid();

  this.playlists[randomUid] = {
    id: randomUid,
    name: name,
    tracks: []
  },
console.log(this.playlists[randomUid]);
},
// addPlaylist("Funk");


// // STRETCH:
// // given a query string string, prints a list of tracks
// // where the name, artist or album contains the query string (case insensitive)
// // tip: use "string".search("tri")
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

printSearchResults: function(query) {

  var object= {};
  var trackObj = this.tracks;
  var randomUid = this.uid();

  for (var trackKey in trackObj){
    for(var allTrack in trackObj[trackKey]){
      if(trackObj[trackKey][allTrack].search(query) != -1){
        object[randomUid] = trackObj[trackKey];

      }
    }
  }
return object;

},
// console.log(printSearchResults("James"));

}

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
console.log(library.addTrackToPlaylist("t02", "p02"));
library.addTrack("Miami", "Will Smith", "Miami");
library.addPlaylist("Funk");
console.log(library.printSearchResults("James"));
// library.uid();



SC.initialize({
  client_id: '095fe1dcd09eb3d0e1d3d89c76f5618f'
});

let songContainer = document.querySelector('.songs-box');

let queryField = document.querySelector('searchbar');

let queryValue = document.querySelector(".searchbar");

let subButton = document.querySelector(".subButton");

document.querySelector('.searchForm').onsubmit = function() {event.preventDefault(); spotlight()};


// function searchCap(query) {
//   console.log(query);
// };


function spotlight() {

  let queryString = queryValue.value;

  //Test search
  SC.get('/tracks', {
      q: queryString
    })
    .then(function(tracks) {
      console.log(tracks);
      songsGen(tracks);
    });

  function songsGen(tracksFields) {
    for (let idx in tracksFields) {
      const info = tracksFields[idx];
      let songBox = document.createElement("div");
      songBox.classList.add("songBox");

      let cover = document.createElement("img");
      cover.setAttribute("src", info.artwork_url);
      cover.classList.add("cover");

      songBox.appendChild(cover);

      let songName = document.createElement("p");
      songName.textContent = info.title;
      songName.classList.add("songName");

      songBox.appendChild(songName);

      let userName = document.createElement("p");
      userName.textContent = (info.user.username);
      userName.classList.add("userName");

      songBox.appendChild(userName);

      songContainer.appendChild(songBox);

    }
  };
}

//Test playlist
// SC.get('/playlists/2050462').then(function(playlist) {
//   playlist.tracks.forEach(function(track) {
//     console.log(track.title);
//   });
// });


(function() {
  var widgetIframe = document.getElementById('sc-widget'),
    widget = SC.Widget(widgetIframe),
    newSoundUrl = 'http://soundcloud.com/forss/flickermood';

  widget.bind(SC.Widget.Events.READY, function() {
    // load new widget
    widget.bind(SC.Widget.Events.FINISH, function() {
      widget.load(newSoundUrl, {
        show_artwork: false
      });
    });
  });

}());

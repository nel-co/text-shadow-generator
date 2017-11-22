(function() {
  if (document.getElementById('particles-js')) {
    const url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nnaiiil&api_key=4cc9b31d9dfb24d9ae40c9963e7aee9f&format=json';
    fetch(url).then(function (response) {
      return response.json();
    }).then(function (data) {
      let link = document.createElement('a');
      link.id = 'spotify';
      link.setAttribute('href', data.recenttracks.track[0].url);
      link.setAttribute('target', '_blank');
      let text = data.recenttracks.track[0].name + ' by ' + data.recenttracks.track[0].artist['#text'];
      let firstText = document.createTextNode('Currently listening to ');
      link.appendChild(document.createTextNode(text));
      document.querySelector('.music').appendChild(firstText);
      document.querySelector('.music').appendChild(link);
    });
  };
})();
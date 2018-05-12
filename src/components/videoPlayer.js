angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      selectedVideo: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });

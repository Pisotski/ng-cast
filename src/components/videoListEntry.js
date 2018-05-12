angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      handleClick: '<'
    },
    controller: function() {
    },
    // TODO
    // has to have a binding to videolist
    templateUrl: 'src/templates/videoListEntry.html'
  });

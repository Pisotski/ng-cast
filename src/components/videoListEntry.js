angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      handleClick: '<'
    },
    controller: function() {
      console.log('videoListEntry', this);
    },
    // TODO
    // has to have a binding to videolist
    templateUrl: 'src/templates/videoListEntry.html'
  });

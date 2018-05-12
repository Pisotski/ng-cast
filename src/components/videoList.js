angular.module('video-player')
  .component('videoList', {
  
    bindings: {
      movies: '<',
      handleClick: '<'
    },
    controller: function() {    
      console.log('videoList', this);

    },
  
  
    templateUrl: 'src/templates/videoList.html'
  });

angular.module('video-player')

  .component('app', {
    controller: function() {
      
      this.movies = exampleVideoData;
      this.selectedVideo = this.movies[0];
      this.handleVideoClick = function(video) {
        this.selectedVideo = video;
      };
      this.handleVideoClick = this.handleVideoClick.bind(this);
      
    },

    templateUrl: 'src/templates/app.html'
  });


//<h5><em>videoList</em> component goes here</h5></video-list>
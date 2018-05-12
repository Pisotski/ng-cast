angular.module('video-player')

  .component('app', {
    controller: function() {
      
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];
      this.selectVideo = function(video) {
        this.currentVideo = video;
        console.log(this);
      };
      this.selectVideo = this.selectVideo.bind(this);
      this.searchResults = function() {
        console.log(this);
      };
    },

    templateUrl: 'src/templates/app.html'
  });


//<h5><em>videoList</em> component goes here</h5></video-list>
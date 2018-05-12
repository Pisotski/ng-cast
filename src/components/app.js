angular.module('video-player')

  .component('app', {
    controller: function(youTube) {
      
      //research dependency injection
      //this.service.youTube.search();
      
      this.searchResults = function(data) {
        this.videos = data;
        this.currentVideo = data[0];
      };
      
      
      this.searchYouTube = function(searchText) {
        youTube.search(this.searchResults, searchText);
      };
      
      this.selectVideo = function(video) {
        this.currentVideo = video;
      };
      
      this.searchResults = this.searchResults.bind(this);
      this.searchYouTube = this.searchYouTube.bind(this);
      this.selectVideo = this.selectVideo.bind(this);
      
      this.videos = youTube.search(this.searchResults);
      this.currentVideo = this.videos[0];
    },
    

    templateUrl: 'src/templates/app.html'
  });


//<h5><em>videoList</em> component goes here</h5></video-list>
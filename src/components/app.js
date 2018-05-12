angular.module('video-player')

  .component('app', {
    controller: function($scope, youTube) {
      
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

      this.clearSearch = function () {
        console.log(' from clearSearch');
        // this.formControl = '';
        
      };

      this.checkIfEnterKeyWasPressed = function($event, searchText) {
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
          youTube.search(this.searchResults, searchText);
          this.clearSearch();
        }
      };
      // this.videos = youTube.search(this.searchResults);
      // this.currentVideo = this.videos[0];

      this.clearSearch = this.clearSearch.bind(this);
      this.checkIfEnterKeyWasPressed = this.checkIfEnterKeyWasPressed.bind(this);
      this.searchResults = this.searchResults.bind(this);
      this.searchYouTube = this.searchYouTube.bind(this);
      this.selectVideo = this.selectVideo.bind(this);
      youTube.search(this.searchResults);
    },
    

    templateUrl: 'src/templates/app.html'
  });


//<h5><em>videoList</em> component goes here</h5></video-list>
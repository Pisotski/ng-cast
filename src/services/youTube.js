angular.module('video-player')

  .service('youTube', function($http) {
    this.search = function(callback, query = 'soccer') {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet',
          key: YOUTUBE_API_KEY,
          q: query,
          max: 5
        }
      }).then(
        function successCallback(response) {
          console.log('GOT DATA: ', response);
          callback(response.data.items);
          
        },
        function errorCallBack(response) {
          console.log('something is wrong ' + response);
        });
    };
  });
    
//part: 'snippet'
//key: key
//q: query
//max : max
angular.module('video-player')

  .component('search', {
    bindings: {
      onClick: '<',
      enterPress: '<',
      clearSearch: '<'
    },
    controller: function() {
      console.log(this, ' from search component');
    },
    templateUrl: 'src/templates/search.html'
  });

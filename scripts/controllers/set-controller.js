(function() {
  function SetController(StoryService) {
    var vm = this;
    vm.addWords = function(newWords) {
      StoryService.setWords(newWords);
    };
  }

  angular
    .module("storyApp")
    .controller("SetController", SetController);
})();
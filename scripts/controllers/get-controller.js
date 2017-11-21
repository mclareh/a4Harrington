(function() {
  function GetController(StoryService) {
    var vm = this;
    vm.allWords = StoryService.getWords();
    console.log(vm.allWords);
  }

  angular 
    .module("storyApp")
    .controller("GetController", GetController);
})();
(function() {
  function StoryService($location) {
    var words = {};

    return {
		setWords: setWords,
		getWords: getWords
    };

    function setWords(newWords) {
      words = newWords;
      $location.path("/story");
    }

    function getWords() {
      return words;
    }
  }

  angular
    .module("storyApp")
    .factory("StoryService", StoryService);
})();
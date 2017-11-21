(function() {
  function StoryService() {
    var words = {};

    return {
      setWords: setWords,
      getWords: getWords
    };

    function setWords(newWords) {
      words = newWords;
      console.log(words);
    }

    function getWords() {
      return words;
    }
  }

  angular
    .module("storyApp")
    .factory("StoryService", StoryService);
})();
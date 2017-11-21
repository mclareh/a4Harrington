(function() {
var formComponent = {
	controller: "SetController as set",
	template: `
		<input ng-model="set.words.one">
        <input ng-model="set.words.two">
        <input ng-model="set.words.three">
        <input ng-model="set.words.four">
        <button ng-click="set.addWords(set.words);">Read Story</button>
	`
};

angular
	.module("storyApp")
	.component("formComponent", formComponent);
})();
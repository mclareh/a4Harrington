(function() {
var storyComponent = {
	controller: "GetController as get",
	template: `
		<p>One fine day, my trusty {{ get.allWords.one }} woke up to find a {{ get.allWords.two }} cat. The cat was {{ get.allWords.three }} {{ get.allWords.four }}. What a weird morning...</p>
        <button ng-click="">Restart Story</button>
	`
};

angular
	.module("storyApp")
	.component("storyComponent", storyComponent);
})();
app.directive('carousel', function($rootScope, ArticleFactory){

	return {
		restrict:'E',
		scope: {},
		templateUrl:'js/common/directives/carousel/carousel.html',
		link: function(scope){

			var allArticles;
			var cArticles;
			scope.dots = [];

			ArticleFactory.fetchAll()
			.then(function(articles){
				allArticles = articles;

				if(allArticles.length > 5){
					cArticles = allArticles.slice(allArticles.length - 5);
				} else {
					cArticles = allArticles.slice();
					scope.cArticles = cArticles;
				}

				// if(cArticles.length !== 1){
					for(var i = 0; i < cArticles.length; i++){
						scope.dots.push(i+1);
					}
				// }

				console.log(cArticles.length);
				console.log(scope.dots);

			})



		}
	}

});
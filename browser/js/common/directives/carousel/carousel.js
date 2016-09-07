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
				scope.welcome = articles[0];
				allArticles = articles.slice(1);

				if(allArticles.length > 5){
					cArticles = allArticles.slice(allArticles.length - 5).reverse();
				} else {
					cArticles = allArticles.slice().reverse();
					scope.cArticles = cArticles;
				}

				// if(cArticles.length !== 1){
					for(var i = 0; i < cArticles.length; i++){
						scope.dots.push(i+1);
					}
				// }

			})



		}
	}

});
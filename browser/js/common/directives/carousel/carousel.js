app.directive('carousel', function($rootScope, ArticleFactory){

	return {
		restrict:'E',
		scope: {},
		templateUrl:'js/common/directives/carousel/carousel.html',
		controller: function(){
			$('.carousel').carousel()
		},
		link: function(scope){

			var allArticles;
			var cArticles;
			scope.dots = [];

			ArticleFactory.fetchAll()
			.then(function(articles){
				console.log("all", articles);
				scope.welcome = articles[0];
				allArticles = articles.slice(1);
				console.log('no welcome', allArticles);

				if(allArticles.length > 5){
					scope.cArticles = allArticles.slice(allArticles.length - 5).reverse();
					console.log('c', cArticles);
				} else {
					cArticles = allArticles.slice().reverse();
					console.log('c', cArticles);
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
app.config(function($stateProvider){
	$stateProvider.state('article', {
		url:'/article/:articleId',
		templateUrl: 'js/article/article.html',
		controller: function($scope, ArticleFactory, $stateParams){

			ArticleFactory.fetchById($stateParams.articleId)
			.then(function(article){
				$scope.artArr = article.Text.split("nline");
				$scope.article = article;
			})

		}
	});
});
app.config(function($stateProvider){
	$stateProvider.state('article', {
		url:'/article/:articleId',
		templateUrl: 'js/article/article.html',
		controller: function($scope, ArticleFactory, $stateParams){

			ArticleFactory.fetchById($stateParams.articleId)
			.then(function(article){
				var artArr = article.Text.split("sbreak");
				for(var i = 0; i < artArr.length; i++){
					artArr[i] = artArr[i].split("nline");
				}
				$scope.article = article;
				$scope.sections = artArr;
			})

		}
	});
});
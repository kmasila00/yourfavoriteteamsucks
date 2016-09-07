app.config(function($stateProvider){
	$stateProvider.state('articleList', {
		url:'/author/:author',
		templateUrl: 'js/articleList/articleList.html',
		controller: function($scope, ArticleFactory, $stateParams){

			$scope.author = $stateParams.author;
			var a = $stateParams.author;

			if(a === 'Jason Olivo') $scope.i = 'images/jason.jpg';
			else if(a === 'Jack Li') $scope.i = 'images/jack.jpg';
			else if(a === 'Amoni Wells') $scope.i = 'images/amoni.jpg';
			else if(a === 'Eddie Torres') $scope.i = 'images/eddie.jpg';
			else if(a === 'Nicholar Brosnan') $scope.i = 'images/nick.jpg';
			else $scope.i = 'images/guest.png';


			ArticleFactory.fetchByAuthor($stateParams.author)
			.then(function(articles){
				$scope.articles = articles;
			})

		}
	});
});
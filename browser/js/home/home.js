app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    });
});

app.controller('homeCtrl', function($scope, Top10Factory, ArticleFactory){

	Top10Factory.fetchAll()
	.then(function(list){
		list.sort(function (a, b) {
		  if (a.Num > b.Num) {
		    return 1;
		  }
		  if (a.Num < b.Num) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.list = list;

		$scope.startList = list.slice(0,5);
		$scope.sitList = list.slice(5);
	})

	ArticleFactory.fetchAll()
	.then(function(articles){
		$scope.articles = articles.reverse();
	})


})
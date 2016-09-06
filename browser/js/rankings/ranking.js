app.config(function($stateProvider){
	$stateProvider.state('rankings',{
		url: '/ranking',
		templateUrl: 'js/rankings/ranking.html',
		controller: 'rankingsCtrl'
	});
});

app.controller('rankingsCtrl', function($scope, RankingsFactory){

	var qbs, wrs, rbs, tes, defs, k;

	RankingsFactory.fetchPos('qbs')
	.then(function(qbs){
		qbs.sort(function (a, b) {
		  if (a.Avg > b.Avg) {
		    return -1;
		  }
		  if (a.Avg < b.Avg) {
		    return 1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.qbs = qbs;
	})

	RankingsFactory.fetchPos('wrs')
	.then(function(wrs){
		wrs.sort(function (a, b) {
		  if (a.Avg > b.Avg) {
		    return -1;
		  }
		  if (a.Avg < b.Avg) {
		    return 1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.wrs = wrs;
	})

	RankingsFactory.fetchPos('rbs')
	.then(function(rbs){
		rbs.sort(function (a, b) {
		  if (a.Avg > b.Avg) {
		    return -1;
		  }
		  if (a.Avg < b.Avg) {
		    return 1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.rbs = rbs;
	})

	RankingsFactory.fetchPos('tes')
	.then(function(tes){
		tes.sort(function (a, b) {
		  if (a.Avg > b.Avg) {
		    return -1;
		  }
		  if (a.Avg < b.Avg) {
		    return 1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.tes = tes;
	})

	RankingsFactory.fetchPos('defs')
	.then(function(defs){
		defs.sort(function (a, b) {
		  if (a.Avg > b.Avg) {
		    return -1;
		  }
		  if (a.Avg < b.Avg) {
		    return 1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.defs = defs;
	})

	RankingsFactory.fetchPos('ks')
	.then(function(ks){
		ks.sort(function (a, b) {
		  if (a.Avg > b.Avg) {
		    return -1;
		  }
		  if (a.Avg < b.Avg) {
		    return 1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.ks = ks;
	})

})
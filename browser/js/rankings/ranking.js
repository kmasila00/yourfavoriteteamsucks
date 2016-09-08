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
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		
		for(var i = 0; i < qbs.length; i++){
			if(Number(qbs[i].Avg) === 100){
				$scope.qbs = qbs.slice(0,i);
				break;
			} 
		}

	})

	RankingsFactory.fetchPos('wrs')
	.then(function(wrs){
		wrs.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.wrs = wrs.slice(0,30);
	})

	RankingsFactory.fetchPos('rbs')
	.then(function(rbs){
		rbs.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.rbs = rbs.slice(0,30);
	})

	RankingsFactory.fetchPos('tes')
	.then(function(tes){
		tes.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.tes = tes.slice(0,30);
	})

	RankingsFactory.fetchPos('defs')
	.then(function(defs){
		defs.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.defs = defs.slice(0,30);
	})

	RankingsFactory.fetchPos('ks')
	.then(function(ks){
		ks.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		$scope.ks = ks.slice(0,30);
	})

})
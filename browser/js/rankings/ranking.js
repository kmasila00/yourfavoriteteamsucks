app.config(function($stateProvider){
	$stateProvider.state('rankings',{
		url: '/ranking',
		templateUrl: 'js/rankings/ranking.html',
		controller: 'rankingsCtrl'
	});
});

app.controller('rankingsCtrl', function($scope, RankingsFactory, $state){

	var qbs, wrs, rbs, tes, defs, k;

	var h = $(window).height() - 310;
 	$('.tab-content').css('height', h);
 	$('.tab-content').css('overflow', 'auto');

	RankingsFactory.fetchPos('qbs')
	.then(function(qbs){
		// qbs.sort(function (a, b) {
		//   if (Number(a.Avg) > Number(b.Avg)) {
		//     return 1;
		//   }
		//   if (Number(a.Avg) < Number(b.Avg)) {
		//     return -1;
		//   }
		//   // a must be equal to b
		//   return 0;
		// });
		console.log(qbs);
		
		for(var i = 0; i < qbs.length; i++){
			qbs[i].Rank = i+1;
			if(qbs[i].Avg === '--' || Number(qbs[i].Avg) === 100){
				$scope.qbs = qbs.slice(0,i);
				break;
			} 
		}

	})

	$scope.qbfilter = function(key){

		$scope.qbs.sort(function(a,b){
		  if (Number(a[key]) > Number(b[key])) {
		    return 1;
		  }
		  if (Number(a[key]) < Number(b[key])) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});

		console.log($scope.qbs);

		$state.reload();

	}

	RankingsFactory.fetchPos('wrs')
	.then(function(wrs){
		for(var i = 0; i < wrs.length; i++){
			wrs[i].Rank = i+1;
			if(wrs[i].Avg === '--' || Number(wrs[i].Avg) === 100){
				$scope.wrs = wrs.slice(0,i);
				break;
			} 
		}
	})

	RankingsFactory.fetchPos('rbs')
	.then(function(rbs){
		for(var i = 0; i < rbs.length; i++){
			rbs[i].Rank = i+1;
			if(rbs[i].Avg === '--' || Number(rbs[i].Avg) === 100){
				$scope.rbs = rbs.slice(0,i);
				break;
			} 
		}
	})

	RankingsFactory.fetchPos('tes')
	.then(function(tes){
		for(var i = 0; i < tes.length; i++){
			tes[i].Rank = i+1;
			if(tes[i].Avg === '--' || Number(tes[i].Avg) === 100){
				$scope.tes = tes.slice(0,i);
				break;
			} 
		}
	})

	RankingsFactory.fetchPos('defs')
	.then(function(defs){
		for(var i = 0; i < defs.length; i++){
			defs[i].Rank = i+1;
			if(defs[i].Avg === '--' || Number(defs[i].Avg) === 100){
				$scope.defs = defs.slice(0,i);
				break;
			} 
		}
	})

	RankingsFactory.fetchPos('ks')
	.then(function(ks){
		for(var i = 0; i < ks.length; i++){
			ks[i].Rank = i+1;
			if(ks[i].Avg === '--' || Number(ks[i].Avg) === 100){
				$scope.ks = ks.slice(0,i);
				break;
			} 
		}
	})

})
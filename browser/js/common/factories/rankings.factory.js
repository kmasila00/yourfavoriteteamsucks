app.factory('RankingsFactory', function($http){

	var baseUrl = '/api/rankings/';

	return {

		fetchPos: function(pos){
			return $http.get(baseUrl + pos)
			.then(function(res){
				var check = res.data;
				for(var i = 0; i < check.length; i++){
					for(var key in check[i]){
						if (Number(check[i][key]) === 21 || Number(check[i][key]) === 0 || check[i][key] === 'playerName') check[i][key] = "--";
					}
				}
				return res.data;
			});
		},

		changeOne: function(pos,n,p,jason,jack,amoni,eddie,nick){
			var avg = (Number(jason) + Number(jack) + Number(amoni) + Number(eddie) + Number(nick))/5
			return $http.put(baseUrl + pos, {Num:n, Player:p, Avg: avg, Jason:jason, Jack:jack, Amoni:amoni, Eddie:eddie, Nick:nick})
			.then(function(res){
				return;
			})
		}

	}

});
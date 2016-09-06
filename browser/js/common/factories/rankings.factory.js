app.factory('RankingsFactory', function($http){

	var baseUrl = '/api/rankings/';

	return {

		fetchPos: function(pos){
			return $http.get(baseUrl + pos)
			.then(function(res){
				return res.data;
			});
		},

		changeOne: function(pos,n,p,jason,jack,amoni,eddie,nick){
			var avg = (Number(jason) + Number(jack) + Number(amoni) + Number(eddie) + Number(nick))/5
			console.log(jason, jack, amoni, eddie, nick);
			var sum = jason + jack + amoni + eddie + nick;
			console.log(sum);
			console.log(avg);
			return $http.put(baseUrl + pos, {Num:n, Player:p, Avg: avg, Jason:jason, Jack:jack, Amoni:amoni, Eddie:eddie, Nick:nick})
			.then(function(res){
				return;
			})
		}

	}

});
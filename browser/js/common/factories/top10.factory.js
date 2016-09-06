app.factory('Top10Factory', function($http){

	var baseUrl = '/api/top10/';

	return {

		fetchAll: function(){
			return $http.get(baseUrl)
			.then(function(res){
				return res.data;
			});
		},

		changeOne: function(n,p,o){
			return $http.put(baseUrl, {Num:n, Player:p, Opp:o})
			.then(function(res){
				return;
			})
		}

	}

});
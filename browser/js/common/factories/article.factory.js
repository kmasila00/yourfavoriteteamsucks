app.factory('ArticleFactory', function($http){
	var baseUrl = '/api/article/'

	return {

		fetchAll: function(){
			return $http.get(baseUrl)
			.then(function(res){
				return res.data;
			})
		},

		fetchById: function(id){
			return $http.get(baseUrl + id)
			.then(function(res){
				return res.data;
			})
		},

		addArticle: function(title, author, image, text){
			return $http.post(baseUrl, {Title:title, Author:author, Text:text, Image:image})
			.then(function(res){
				return res.data;
			})
		}

	}
})
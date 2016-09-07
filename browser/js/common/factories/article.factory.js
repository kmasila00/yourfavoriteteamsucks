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

		fetchByAuthor: function(author){
			return $http.get(baseUrl + 'author/' + author)
			.then(function(res){
				return res.data;
			})
		},

		addArticle: function(title, author, date, image, text){
			return $http.post(baseUrl, {Title:title, Author:author, Date:date, Text:text, Image:image})
			.then(function(res){
				return res.data;
			})
		}

	}
})
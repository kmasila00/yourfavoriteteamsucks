app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html'
    });
});

app.controller('homeCtrl', function($scope){

	$scope.images = [
		"http://assets.pokemon.com/assets/cms2/img/watch-pokemon-tv/seasons/season19/season19_ep17_ss01.jpg",
		"http://www.pokemon20.com/assets/img/mythical/poke_group.png",
		"http://i4.mirror.co.uk/incoming/article7765088.ece/ALTERNATES/s615b/Pokemon-live-action.png"
	];

})
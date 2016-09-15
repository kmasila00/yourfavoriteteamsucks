app.config(function ($stateProvider) {

    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: 'js/adminPanel/templates/admin.html',
        controller: function() {
        },
        resolve: {
            isAdmin: function($state, AuthService){
              return AuthService.getLoggedInUser()
              .then(function (user) {
                if(!user || user.isAdmin === false) $state.go('home')
              })
            }
        }
    });

    $stateProvider.state('articlePost', {
        url: '/admin/article',
        templateUrl: 'js/adminPanel/templates/article.html',
        controller: function ($scope, ArticleFactory, $state) {
          $scope.submit = function(){
            ArticleFactory.addArticle($scope.title, $scope.author, $scope.date, $scope.imageUrl, $scope.text)
            alert('Article Added!');
            $state.go('admin');
          }
        }
    });

    $stateProvider.state('rankingsChange', {
        url: '/admin/rankings',
        templateUrl: 'js/adminPanel/templates/rankings.html',
        controller: function($scope, RankingsFactory){
            RankingsFactory.fetchPos('qbs')
            .then(function(qbs){
              qbs.sort(function (a, b) {
                if (a.Num > b.Num) {
                  return 1;
                }
                if (a.Num < b.Num) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
              $scope.qbs = qbs;
            })

            RankingsFactory.fetchPos('wrs')
            .then(function(wrs){
              wrs.sort(function (a, b) {
                if (a.Num > b.Num) {
                  return 1;
                }
                if (a.Num < b.Num) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
              $scope.wrs = wrs;
            })

            RankingsFactory.fetchPos('rbs')
            .then(function(rbs){
              rbs.sort(function (a, b) {
                if (a.Num > b.Num) {
                  return 1;
                }
                if (a.Num < b.Num) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
              $scope.rbs = rbs;
            })

            RankingsFactory.fetchPos('tes')
            .then(function(tes){
              tes.sort(function (a, b) {
                if (a.Num > b.Num) {
                  return 1;
                }
                if (a.Num < b.Num) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
              $scope.tes = tes;
            })

            RankingsFactory.fetchPos('defs')
            .then(function(defs){
              defs.sort(function (a, b) {
                if (a.Num > b.Num) {
                  return 1;
                }
                if (a.Num < b.Num) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
              $scope.defs = defs;
            })

            RankingsFactory.fetchPos('ks')
            .then(function(ks){
              ks.sort(function (a, b) {
                if (a.Num > b.Num) {
                  return 1;
                }
                if (a.Num < b.Num) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              });
              $scope.ks = ks;
            })

            $scope.obj = {
              qb:'',
              wr:'',
              rb:'',
              te:'',
              def:'',
              k:''
            };
            $scope.jason = 0;
            $scope.jack = 0;
            $scope.amoni = 0;
            $scope.eddie = 0;
            $scope.nick = 0;

            $scope.change = function(pos, num, player, jason, jack, amoni, eddie, nick){
                console.log(num);
                if(num === '--'){
                  if(pos === 'wrs' || pos === 'rbs') num = 26;
                } else {
                  num = 21;
                }
                console.log(num);
                RankingsFactory.changeOne(pos, num, player, jason, jack, amoni, eddie, nick)
            }
        }
    });

    $stateProvider.state('top10Change', {
        url: '/admin/top10',
        templateUrl: 'js/adminPanel/templates/top10.html',
        controller: function($scope, Top10Factory){
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
            })

            $scope.change = function(n,p,o){
              Top10Factory.changeOne(n,p,o)
              .then(function(){});
            }
        }
    });

});

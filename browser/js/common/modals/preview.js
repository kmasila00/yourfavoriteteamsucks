app.controller('PreviewModalCtrl', function ($scope, $uibModalInstance, $rootScope) {

  var artArr = $rootScope.dbText.split("sbreak");
  for(var i = 0; i < artArr.length; i++){
    artArr[i] = artArr[i].split("nline");
  }
  
  $scope.sections = artArr;

  $scope.close = function () {
    $uibModalInstance.dismiss('cancel');
  };

});
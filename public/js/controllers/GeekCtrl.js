angular.module('GeekCtrl', ['ngDialog']).controller('GeekController', function($scope, ngDialog, $http) {

	$http.defaults.headers.post["Content-Type"] = "application/json";
		var formData = {
					 user_id:"77",
			     email: "default",
	         name: "default"};

					 $scope.submit = function() {
						 ngDialog.open({ template: 'popupTmpl.html'});
						formData = $scope.form;
						$scope.form.user_id = new Date().valueOf();
						console.log("bc", formData);
				     $http({
				         url: "https://ntmkurtm31.execute-api.us-west-2.amazonaws.com/dev/signup",
				         data: $scope.form,
				         method: 'POST'
				     }).success(function(data){
				         console.log("OK", data)
				     }).error(function(err){"ERR", console.log(err)});
				 };

});

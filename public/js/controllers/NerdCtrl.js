angular.module('NerdCtrl', ['ngDialog']).controller('NerdController', function($scope, $anchorScroll, $location, ngDialog, $http, $window, $mdDialog){
	var originatorEv;

	 this.openMenu = function($mdMenu, ev) {
		 originatorEv = ev;
		 $mdMenu.open(ev);
	 };

	 this.goToSignup = function(x) {

		 var newHash = 'works';
 if ($location.hash() !== newHash) {
	 $location.hash('works');
 } else {
	 $anchorScroll();
 }
	 };

	 this.goToAboutUs = function(x) {
		 var newHash = 'teams';
	if ($location.hash() !== newHash) {
	 $location.hash('teams');
	} else {
	 $anchorScroll();
	}
	 };

	 this.goToFeatures = function(x) {
		 var newHash = 'intro';
	if ($location.hash() !== newHash) {
	 $location.hash('intro');
	} else {
	 $anchorScroll();
	}
	 };


	$scope.myFunc = function() {
	    $window.scrollTo(0, 0);
	    };

    
});

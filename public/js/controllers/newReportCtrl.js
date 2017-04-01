angular.module('NewReportCtrl', [])
	.controller ('NewReportCtrl', ['$scope', function($scope) {
		
		flatpickr(".flatpickr", { altInput: true, enableTime: true });


}]);
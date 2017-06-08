angular.module('NewReportCtrl', [])
	.controller ('NewReportCtrl', ['$scope', function($scope) {
		$scope.colors = true;
		$scope.form = false;

		$scope.changeToForm = function() {
			$scope.colors = false;
			$scope.form = true;
		}

		$scope.changeToColors = function() {
			$scope.colors = true;
			$scope.form = false;
		}

		// flatpickr(".flatpickr", { altInput: true, enableTime: true });


}]);
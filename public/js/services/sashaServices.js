// public/js/services/NerdService.js
angular.module('SashaService', []).factory('apiCalls', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/reports');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(data) {
            return $http.post('/api/reports', data);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/reports/' + id);
        }
    }       

}]);

//file: example.client.routes.js
/* global angular */
angular.module('example').config(['$routeProvider', 
        function($routeProvider){
 //           console.log('In routeProvider');
            $routeProvider.
                when('/', {
                    templateUrl: 'example/views/example.client.view.html'
                })
                .otherwise({  redirectTo: '/'    });
            }
        ]);
        
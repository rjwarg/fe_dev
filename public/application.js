//file: application.js
/* globals angular */

var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute', 'users','example']);

mainApplicationModule.config(['$locationProvider', 
    function($locationProvider){
  //      console.log('location provider');
    $locationProvider.hashPrefix('!');
}
]);

if(window.location.hash === '#_=_') window.location.hash = '#!';

angular.element(document).ready(function(){
//    console.log('application main part');
    angular.bootstrap(document, [mainApplicationModuleName]);
});
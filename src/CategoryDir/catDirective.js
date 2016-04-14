angular.module('app')
.directive('catDirective', function(){

 return {
   templateUrl: '/catTemplate.html',
   restrict: 'E',
   scope: {
     group:'='
   },
   controller: 'ModalCtrl',
   link: function(scope, element, attributes) {
     scope.toggle = function() {
       scope.show = !scope.show;
     };

   }
 };


});
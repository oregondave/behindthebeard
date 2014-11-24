'use strict';

/* Directives */

proto.directive('myRepeatDirective', function() {

  return function(scope, element, attrs) {
  	if (scope.$last){
      initGridJS();
      // window.alert("im the last!");
    }
   };
});
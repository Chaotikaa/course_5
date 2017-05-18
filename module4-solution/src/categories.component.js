(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'views/templates/categories.component.html',
  bindings: {
    categories: '<'
  }
});


})();
(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'views/templates/items.component.html',
  bindings: {
    items: '<'
  }
});


})();
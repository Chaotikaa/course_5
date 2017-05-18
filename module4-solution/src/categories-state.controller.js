(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesStateController', CategoriesStateController);

CategoriesStateController.$inject = ['categories'];
function CategoriesStateController (categories) {
  var csctrl = this;

  // console.log(categories);

  csctrl.categories = categories.data;

}


})();
(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsStateController', ItemsStateController);

ItemsStateController.$inject = ['items', 'shortName'];
function ItemsStateController (items, shortName) {
  var isctrl = this;

  // console.log(items.data.menu_items);

  isctrl.items = items.data.menu_items;
  isctrl.shortName = shortName;

}


})();
(function () {
'use strict';

angular.module("NarrowItDownApp", [])
.controller("NarrowItDownController", NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive("foundItems", FoundItemsDirective);
NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService) {

  var ctrl = this;

  ctrl.searchTerm = "";

  ctrl.getItems = function () {
    MenuSearchService.getMatchedMenuItems(ctrl.searchTerm).then(function (response) {
      ctrl.items = response;
    });

    ctrl.lastSearch = ctrl.searchTerm;
  }

  ctrl.removeItem = function(index) {
    ctrl.items.splice(index, 1);
  }
}

MenuSearchService.$inject = ["$http"];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {

    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json",
    });


    return response.then(function (result) {
      if (searchTerm == undefined || searchTerm == "") {
        return [];
      }
      var foundItems = result.data.menu_items;
      for (var i = 0; i < foundItems.length; i++) {
        if(foundItems[i].description.indexOf(searchTerm) === -1) {
          foundItems.splice(i, 1);
          i--;
        }
      }
      return foundItems;
    });

  }
}

function FoundItemsDirective () {
  var ddo = {
    templateUrl: "foundItems.html",
    scope: {
      found: '<',
      onRemove: '&',
      input: '='
    }
  };

  return ddo;
}

})();
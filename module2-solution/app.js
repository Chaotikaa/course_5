(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {

  this.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  this.buy = function (index){
    ShoppingListCheckOffService.buy(index);
  };

  this.empty = function() {

    return ShoppingListCheckOffService.toBuyIsEmpty();
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {

  this.itemsAlreadyBought = ShoppingListCheckOffService.getItemsAlreadyBought();

  this.empty = function() {
    return ShoppingListCheckOffService.alreadyBoughtIsEmpty();
  }

}

function ShoppingListCheckOffService () {

  var service = this;

  var itemsToBuy = [
    { name: "cookies", quantity: "10"},
    { name: "soda", quantity: "5"},
    { name: "bacon", quantity: "7"},
    { name: "sausage", quantity: "3"},
    { name: "bread", quantity: "4"}
  ];
  var itemsAlreadyBought = [];

  this.buy = function(index) {
    itemsAlreadyBought.push(itemsToBuy[index]);
    itemsToBuy.splice(index, 1);
    console.log(itemsToBuy.length);
  };

  this.getItemsToBuy = function () {
    return itemsToBuy;
  };

  this.getItemsAlreadyBought = function () {
    return itemsAlreadyBought;
  };

  this.alreadyBoughtIsEmpty = function () {
    console.log(itemsAlreadyBought.length);
    return itemsAlreadyBought.length == 0;
  };

  this.toBuyIsEmpty = function () {
    return itemsToBuy.length == 0;
  }

}



})();

(function () {
'use strict';


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getItems();

  toBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };



}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  //var items2Buy = ["crack","coke","mdmd","happy new year cunts"];
  
  var itemsBought = [];

  var items2Buy = [
    {name: "Cava" ,quantity: "10 bottles"},
    {name: "Belgian Beers",quantity: "1 crate"},
    {name: "Whiskey",quantity: "5 litre"},
    {name: "Ron",quantity: "1 barrel"},
    {name: "Cigars" ,quantity: "1 box"}
  ];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {
    var st = items2Buy[itemIdex];
    items2Buy.splice(itemIdex, 1);
    itemsBought.push(st);
    st = "";
  };

  service.getItems = function () {
    return items2Buy;
  };

  service.getBoughtItems = function () {
    return itemsBought;
  };
}





})();

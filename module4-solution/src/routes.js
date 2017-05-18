(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'views/categories.html',
      controller: 'CategoriesStateController as csctrl',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{category}',
      templateUrl: 'views/items.html',
      controller: 'ItemsStateController as isctrl',
      resolve: {
        items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }],
        shortName: ['$stateParams', function ($stateParams) {
          return $stateParams.category;
        }]
      }
    });
}



})();
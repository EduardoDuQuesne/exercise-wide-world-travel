/*jshint esversion: 6 */

angular.module("travelBookApp", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
        .when("/", {
            templateUrl: "app/partials/books.html",
            controller: "bookCtrl"
        })
        .otherwise("/");
    });
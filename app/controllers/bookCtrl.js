/*jshint esversion: 6 */

angular.module("travelBookApp").controller("bookCtrl", function ($scope, bookFactory) {
    bookFactory.getBooks()
    .then((bookData) => {
        $scope.bookList = bookData.guides;
    });
});
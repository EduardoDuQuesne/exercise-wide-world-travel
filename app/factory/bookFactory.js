/*jshint esversion: 6 */

angular.module("travelBookApp").factory("bookFactory", function($q, $http) {
    let getBooks = () => {
        return $q((resolve, reject) => {
            $http
            .get('data/guides.json')
            .then((bookData) => {
                resolve(bookData.data);
            })
            .catch((error) => {
                reject(error);
            });
        });
    };
    return {getBooks};
});
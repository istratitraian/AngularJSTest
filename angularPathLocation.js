var app = angular.module('app', []);

app.controller('mainController', ['$scope', '$location', '$log',

    function ($s, $loc, $log) {
        $log.info($loc.path()); // shows the url
    }
]);



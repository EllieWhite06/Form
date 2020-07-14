var app = angular.module('app', []);
app.controller('testCtrl', function($scope, $http){
  $scope.gender=0;
});

function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function input() {
    var x = document.getElementById("Input");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function myInpt() {
    var x = document.getElementById("myInpt");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}


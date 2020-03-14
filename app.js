var myApp = angular.module("myList",[]);
myApp.controller("myListController", function($scope){
    $scope.items = [];
    $scope.newItem="";
    $scope.editIndex = false;
    $scope.done = false;
    $scope.button = "Add";

    $scope.pushItem = function(){
        if($scope.newItem != "" && $scope.editIndex === false){
        //$scope.items.push($scope.newItem);
        $scope.items.push({newItem: $scope.newItem, done: false});
        }
        else{
            $scope.items[$scope.editIndex].newItem = $scope.newItem;
            $scope.button = "Add";
        }
        $scope.newItem = "";
        $scope.editIndex = false;
    }

    $scope.deleteItem = function(index){
        $scope.items.splice(index, 1);
    }

    $scope.editItem = function(index){
        $scope.button = "Update";
        $scope.newItem = $scope.items[index].newItem;
        $scope.editIndex = index;
      }

      $scope.doneItem = function (index){
          $scope.items[index].done = true;
      }

      $scope.unDoneItem = function (index){
          $scope.items[index].done = false;
      }
})
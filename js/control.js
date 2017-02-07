
var myApp= angular.module("myApp",[]);

myApp.controller("myController",function ($scope){
$scope.tasks=[];

$scope.enterTask=function(){
if(event.which ==13 && $scope.task!=""){
    $scope.addTasks();    
}

};
$scope.addTasks=function(){
  $scope.tasks.push({'taskMessage':$scope.task, 'status':false} );
    $scope.task='';
    
};
$scope.editContent=function(){
    //console.log("something");
    event.target.contentEditable = event.target.contentEditable == "false" ? "true" :"false";
};
$scope.enterAgain=function(item){
    if(event.which ==13 && item!=""){
        $scope.editContent();
        console.log(11);
   }
};

$scope.removeTask=function(){
$scope.tasks=$scope.tasks.filter(function(item){
return !item.status;
}) 

};
});
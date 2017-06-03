app.controller('wwu',function($scope){
   $scope.formsubmit = function(isValid){
       if(isValid)
           Materialize.toast("Your form is submitted", 4000);
       else
           Materialize.toast("Invalid form", 4000);
   } 
});
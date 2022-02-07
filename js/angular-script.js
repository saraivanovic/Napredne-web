
//Application module
var crudApp = angular.module('crudApp',[]);
crudApp.controller("DbController",function($scope,$http){
	//Function to get employee details from the database
	getInfo();
	function getInfo() {
		//Sending request to EmpDetails.php file
		$http.get('databaseFiles/empDetails.php').then(function(response){
			//Stored the returned data into scope
			$scope.details=response.data;
		});
	}

// Setting default value of gender 
$scope.empInfo = {'gender' : 'female'};
// Enabling show_form variable to enable Add employee button
$scope.show_form = true;

$scope.insertInfo = function(info){
$http.post('databaseFiles/insertDetails.php',{"id":info.id,"name":info.name,
"email":info.email,"address":info.address,"a":info.address2,"gender":info.gender}).
then(function(response){
getInfo();
$("#empForm")[0].reset();//da se posle unosa podataka sa forme ona resetuje
$('#empForm').slideUp();//da se sakrije forma posle unosa podataka
});

}

// Function to add toggle behaviour to form
$scope.formToggle =function(){
$("#empForm").toggle( "slow" );//prikaz prazne forme
$('#editForm').slideUp();//skrivanje (podizanje) forme za edit
}

});


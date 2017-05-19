
"use strict";

var petArr = [];


$('#addToTable').on('click', getPetInfo);
$('#addNewItem').on('click', showForm);



//get data and display table

function getPetInfo(){
	var ownerName = $('#ownerName').val();
	var typeOfPet = $('#petType').val();
    var nameOfPet = $('#petName').val();
	var newItem = {ownerName: ownerName, typeOfPet: typeOfPet, nameOfPet: nameOfPet};


  petArr.push(newItem); 
  showTable();

  petArr.forEach(buildTable);

	$('input').val('');
	event.preventDefault();
}


function buildTable() {
  $("#itemInfo").empty();
  for (var i = 0; i < petArr.length; i++) {
     $("#itemInfo").append("<tr><td>" + petArr[i].ownerName + "</td><td>" + petArr[i].typeOfPet + "</td><td>" + petArr[i].nameOfPet + "</td></tr>");
  }
}

// functions to show and hide form and table
function showForm() {
  $('#addNewItem').hide();
  $('#tableInfo').hide();
  $('#formSection').show();
}


function showTable(){
  $('#addNewItem').show();
  $('#tableInfo').show();
  $('#formSection').hide();
}



//clear form

function clearFormInputs() {
	$('#ownerName').val('');
	$('#petType').val('');
  $('#petName').val('');
}

function clearTableInputs() {
	$('#itemInfo').val('');

}


$('#resetForm').on('click', function () {
	clearFormInputs();
	event.preventDefault();
});


$('#resetTable').on('click', function () {
	clearTableInputs();
	event.preventDefault();
});


/**
* @description Makes the Grid
* @constructor
* @param 
*/
// This function makes the grid.
function makeGrid() {
	
	// Selects size inputs and assignes to variables.
	let heightVal = $('#inputHeight').val();
	let widthVal = $('#inputWeight').val();

	// Resets grid
	$('#pixelCanvas').empty();

	//Loops to add <tr> for height.
	for(let i=1;i<=heightVal;i++){
		$('#pixelCanvas').append('<tr></tr>');
	}

	//loops through the row to insert <td>s.
	for(let j=1;j<=widthVal;j++){
		$('tr').append('<td></td>');
	}
}

// Wait for page to load first.
$(function(){
	// Calls makeGrid() when form is submitted. Prevent default of submit button. 
	$('#sizePicker').submit(function(event){
		makeGrid();
		event.preventDefault();
	});

	//Sets events to change background color of cells.
	$('table').on('click', 'td', function() {
    	let pickedColor = $('#colorPicker').val();
    	$(this).css('background-color', pickedColor);
	});	
});
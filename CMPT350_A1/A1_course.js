var lecDates = [[6,8,10,13,15,17,20,22,24,27,29,31], [3,5,7,10,12,14,24,26,28], [2,4,6,9,11,13,16,18,20,23,25], [1,3,6]];

var tutDates = [[13,15,16,20,22,23,27,29,30], [3,5,6,10,12,13,24,26,27], [2,4,5,9,11,12,16,18,19,23,25], [1,6]];

var monthNames = ["January", "February", "March", "April"]

function makeTable(table_id){
	var table = document.createElement("table"),
		row = table.insertRow();
	
	table.border = "1px";
	table.width = "50%"
	lecRow = table.insertRow(0);
	lecRow.rowSpan = "34";
	
	lecCell = lecRow.insertCell(0);
	lecCell.innerHTML = "Lectures"
	
	for (var i = 0; i < lecDates.length; i++){
		var month = monthNames[i];
		
		for (var j=0; j < lecDates[i].length; j++){
			var cell = row.insertCell();
			cell.innerHTML = month + " " + lecDates[i][j];
			row = table.insertRow(); // every month is on the same row
		}
		
	}
	
	document.getElementById("time_table").appendChild(table)
}

makeTable("time_table")

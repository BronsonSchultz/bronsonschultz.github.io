var lecDates = [[6,8,10,13,15,17,20,22,24,27,29,31], [3,5,7,10,12,14,24,26,28], [2,4,6,9,11,13,16,18,20,23,25], [1,3,6]];

var tutDates = [[13,15,16,20,22,23,27,29,30], [3,5,6,10,12,13,24,26,27], [2,4,5,9,11,12,16,18,19,23,25], [1,6]];

var monthNames = ["January", "February", "March", "April"]

function makeTable(table_id){
	for (var i = 0; i < lecDates.length; i++){
		document.getElementById(table_id).innerHTML = lecDates[i]
	}
}

makeTable("time_info")

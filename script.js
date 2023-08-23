function changeColor(id){
	for(let i=1;i<=3;i++){
		if (i !== id) {
			// Change its color
			document.getElementById("square" + i).style.backgroundColor = "#6F4E37"; //coffee
		}
	}
}
function resetColor(id){
	for(let i=1;i<=3;i++){
		if (i !== id) {
			document.getElementById("square" + i).style.backgroundColor = "#E6E6FA"; //lavender
		}
	}
}
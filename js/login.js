function admin(){
	var name=prompt("Password:");
	$.get('control.php?handle=login&pass='+name, function(data) {
		if(data==1){
			alert("Yes");
		}
	});
}
document.onkeydown=function(e){
	switch(e.which){
		case 16:
			shift = true;
			break;
		case 17:
			ctrl = true;
			break;
		case 65:
			if(shift && ctrl){
				admin();
				break;
			}
	}
}
document.onkeyup=function(e){
	shift = false;
	ctrl = false;
}
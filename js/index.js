//StartUp
//---------------------------------------------------
$("#menu li:eq(0)").css('color','red');
$('.detail').hide();
$('#facebook').attr({
	src:"img/fb_ico.jpg",
	alt:"Facebook",
	title:'Facebook'
});
$('#facebook').css({
	'width':'30px',
	'height':'30px'
});
$("#facebook").click(function () {
	window.open("https://www.facebook.com/peace.saravudecha", '_blank');
});
$('#crowteam').attr({
	src:"img/crow.png",
	alt:"Crow Team Dev",
	title:'Crow Team Dev'
});
$('#crowteam').css({
	'width':'35px',
	'height':'35px'
});
$("#crowteam").click(function () {
	window.open("http://www.crowteamdev.com", '_blank');
});
handleWork();
//---------------------------------------------------
$("#menu li").click(function () {
	var order = $(this).index();
	callMenu(order);
	$("#menu li").css('color','black');
	$("#menu li").hover(function() {
		if($(this).css('color') != "rgb(255, 0, 0)"){
			$(this).css('color','#AAAAAA');
		}
	}, 
   	function() {
		if($(this).css('color') != "rgb(255, 0, 0)"){
			$(this).css('color','#000000');
		}
   	});
	$("#menu li:eq("+order+")").css('color','red');
	$('#main').animate({'background-position-y': (order*-260)+"px"}, 1000);
});
var directionDrop = "down";
var currentPos = 0;
function callMenu(i){
	$('#work').css({'overflow-y':'hidden','padding-right':'15px'});
	if(i>currentPos){
		directionDrop = "down";
		$('.detail').hide("drop",  { direction: "up" }, 1000);
	}
	else{
		directionDrop = "up";
		$('.detail').hide("drop",  { direction: "down" }, 1000);
	}
	switch(i){
		case 0:
			break;
		case 1:
			$('#work').show("drop",  { direction: directionDrop }, 1000,function(){
				$('#work').css({'overflow-y':'scroll','padding-right':'0px'});
			});
			break;
		case 2:
			$('#image').show("drop",  { direction: directionDrop }, 1000);
			break;
		case 3:
			$('#contact').show("drop",  { direction: directionDrop }, 1000);
			break;
	}
	currentPos = i;
}
function handleWork(){
	$.get('control.php?handle=work', function(dataRead) {
		$('#work').append(dataRead);
		$("#work div h3").click(function (){
			window.open($(this).text(), '_blank');
		});
		$("#work div h3").attr({
			title:'To URL'
		});
	});
}
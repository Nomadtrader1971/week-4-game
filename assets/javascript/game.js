
var random_result;
var loss = 0;
var win = 0;
var previous = 0;




var resetAndStart = function(){

		$(".crystals").empty();



var images = [
"http://www.free-icons-download.net/images/square-crystal-style-button-icon-32178.png", 
"http://downloadicons.net/sites/default/files/yellow-blue-crystal-icon-style-rectangular-button-32172.png", 
"http://downloadicons.net/sites/default/files/yellow-crystal-style-button-icon-32176.png", 
"http://downloadicons.net/sites/default/files/green-crystal-icon-style-rectangular-button-32170.png"];


random_result = Math.floor(Math.random()*69) +30;

$("#result").html('Random Result:' + random_result);

	for (var i = 0; i<4; i++){

	var random = Math.floor(Math.random()*11) +1;
	console.log(random);

	var crystal = $("<div>");
		crystal.attr({
			"class": 'crystal', 
			"data-random": random

	});
		crystal.css({
			"background-image": "url('" + images [i] +"')",
			"background-size": "cover",

		});

	

	$(".crystals").append(crystal);

	}
	$("#previous").html("Total Score: " + previous);

}
resetAndStart();



$(document).on("click", ".crystal", function() {


	var num = parseInt($(this).attr('data-random'));

	previous += num;

	$("#previous").html("Total score: " + previous);


	console.log(previous);

	if(previous > random_result){
		
		loss++;

		$("#loss").html("You lost: " + loss);

		previous = 0;


		resetAndStart();

	}

	else if(previous === random_result){
		//console.log("You Win");
		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		$("#previous").html(previous);

		resetAndStart();

	}
});
	


	
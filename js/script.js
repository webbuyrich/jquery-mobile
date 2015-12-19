$(document).ready(function (){
	
	/*
	$.getJSON('http://api.randomuser.me/?results=10', function(data){
		console.log(data);
	});
	*/

	$.ajax({
		url: 'http://api.randomuser.me/?results=10',
		dataType: 'json',
		type: 'get',
		cache: false,
		success: function(data){
			$(data.results).each(function(index, value){
				console.log(value.user.picture.medium);
			})
		}
	})


});
$(document).ready(function (){
	
	/*
	$.getJSON('http://api.randomuser.me/?results=10', function(data){
		console.log(data);
	});
	*/
	$('.link-users').click(function(){
		usersList();
	});
	
	function usersList(){
		$.ajax({
			url: "http://api.randomuser.me/?results=10",
			dataType: 'json',
			success: function(data){
				$.each(data.results, function(i, user){
					var output ='<li class="user-list">';
						output+='<a href="#">';
						output+='<img src="'+user.user.picture.thumbnail+'">';
						output+='<h2>'+user.user.name.first+ ' '+user.user.name.last+'</h2>';
						output+='<p>'+user.user.location.street+'<br />';
						output+= user.user.location.city+','+user.user.location.state+'<br />';
						output+= user.user.phone+'</p>';
						output+='</a>';
						output+='</li>';
					$('#showUserList').append(output);
				});			
				
			}

		})
	}
	


});




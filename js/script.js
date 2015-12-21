$(document).ready(function (){
	
	/*
	$.getJSON('http://api.randomuser.me/?results=10', function(data){
		console.log(data);
	});
	*/
	$('.link-users').click(function(){
		usersList();

	});
	
	function usersList(data){
		$.ajax({
			url: "http://api.randomuser.me/?results=10",
			dataType: 'json',
			success: function(data){
				$.each(data.results, function(i, user){
					var output ='<li class="ui-grid-a"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r">';						
						output+='<div class="ui-block-a"><img src="'+user.user.picture.thumbnail+'"></div>';
						output+='<div class="ui-block-b user-list-text-padding"><p><span class="username-capitalize">'+user.user.name.first+ ' ' +user.user.name.last+'</span><br />';
						output+= user.user.location.street+'<br />';
						output+= user.user.location.city+','+user.user.location.state+'<br />';
						output+= user.user.phone+'</p></div>';
						output+='</a>';
						output+='</li>';
						$('#user-list').append(output);
				});			
				
			}

		});
	}
	


});




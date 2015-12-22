$(document).ready(function (){
	
	/*
	$.getJSON('http://api.randomuser.me/?results=10', function(data){
		console.log(data);
	});
	*/

	var userData;

	$.ajax({
		url: "http://api.randomuser.me/?results=10",
		dataType: 'json',
		success: function(data){					
			userData = data;
		}
	});



	$('.link-users').click(function(){
		$.each(userData.results, function(i, user){
						
			var output ='<li class="ui-grid-a user-profile" data-username="'+user.user.username+'"><a href="#profile" class="ui-btn ui-btn-icon-right ui-icon-carat-r">';						
				output+='<div class="ui-block-a"><img src="'+user.user.picture.thumbnail+'"></div>';
				output+='<div class="ui-block-b user-list-text-padding"><p><span class="username-capitalize">'+user.user.name.first+ ' ' +user.user.name.last+'</span><br />';
				output+= user.user.location.street+'<br />';
				output+= user.user.location.city+','+user.user.location.state+'<br />';
				output+= user.user.phone+'</p></div>';
				output+='</a>';
				output+='</li>';
				$('#user-list').append(output);


		});	

		$('.user-profile').click(function(){

			var newdata = $(this).data('username');

			$.each(userData.results, function(i, user){
				
				if(user.user.username === newdata){

					var output = '<div class="ui-body ui-body-a ui-corner-all"><h3 class="ui-bar ui-bar-a username-capitalize">'+user.user.name.first+ ' ' +user.user.name.last+'</h3>'; 
					output+='<img src="'+user.user.picture.medium+'">';
					output+='<p>';
					output+= user.user.username+'<br />';
					output+= user.user.email+'<br />';
					output+= user.user.cell+'<br />';
					output+='</p>';
					output+='</div>';
					$('#user-profile').html(output);
				} 	
				
			});	
		});

	});



		
			
		
		
	
	
	
	

	

});




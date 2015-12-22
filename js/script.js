$(document).ready(function (){

	/*
	$.getJSON('http://api.randomuser.me/?results=10', function(data){
		console.log(data);
	});
	*/

$(document).on("pageshow","#users", function(){
	 $(':jqmData(role="header")').html('<h1 class="ui-title" role="heading" aria-level="1">USERS</h1><a href="#home" class="ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-notext ui-icon-home">Home</a><a href="#" class="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-notext ui-icon-info">Info</a>');

});
$(document).on("pageshow","#profile", function(){
	 $(':jqmData(role="header")').html('<h1 class="ui-title" role="heading" aria-level="1">PROFILE</h1><a href="#home" class="ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-notext ui-icon-home">Home</a><a href="#" class="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-notext ui-icon-info">Info</a>');

});
$(document).on("pageshow","#videos", function(){
	 $(':jqmData(role="header")').html('<h1 class="ui-title" role="heading" aria-level="1">VIDEOS</h1><a href="#home" class="ui-btn-left ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-notext ui-icon-home">Home</a><a href="#" class="ui-btn-right ui-btn ui-btn-inline ui-mini ui-corner-all ui-btn-icon-notext ui-icon-info">Info</a>');

});

	var userData;

	$.ajax({
		url: "http://api.randomuser.me/?results=10",
		dataType: 'json',
		success: function(data){
			userData = data;
		}
	});

	$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",{
		part: 'snippet',
		maxResults: 10,
		playlistId: 'UU4n11G8TYcmJgSj7jjZRWKA',
		key: 'AIzaSyAFmeWlGCaTkMx5ntJjc2FvlFEzuv2YvXQ'},
			function(data){
				videoData = data;
			}
	);


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
					output+='<button  onclick="history.back();" class="ui-btn ui-shadow ui-icon-back ui-btn-icon-left">Go Back</button>'
					output+='</div>';
					$('#user-profile').append(output);
				}

			});
		});

	});

$('.link-videos').click(function(){

		

		$.each(videoData.items, function(i, item){
			
			videoTitle = item.snippet.title;
			videoThumbnail = item.snippet.thumbnails.default.url;
			videoID = item.snippet.resourceId.videoId;

			var output ='<li class="ui-grid-a popupVideo" data-videoid="'+videoID+'"><a href="#popupVideo" data-rel="popup" data-position-to="window" class="ui-btn ui-btn-icon-right ui-icon-carat-r">';
				output+='<div class="ui-block-b user-list-text-padding"><p>'+videoTitle+'</p></div>';
				output+='</a>';
				output+='</li>';
				$('#video-list').append(output);
		})


		$('.popupVideo').click(function(){
			
			var newVideoID = $(this).data('videoid');
			
			$.each(videoData.items, function(i, item){

				videoID = item.snippet.resourceId.videoId;
				
				if(videoID === newVideoID){
					
					output = '<iframe src=\"http://www.youtube.com/embed/'+newVideoID+'" height="315"></iframe>';

					$('#popupVideo').html(output);

				}

			});

		});

	

});
















});




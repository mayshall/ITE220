var marvel = {
	render: function(){
		var message = document.getElementById("message");
		var footer = document.getElementById("footer");
		var anim = document.getElementById("anim");

		var comics = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=e77f931b6621498f34fa432058199053&hash=e3c34b543b2fa9c7c094aaf7ea2fc2a1";
		var comicsHtml = document.getElementById("comicsHtml");
		$.ajax({
			url: comics,
			type: "GET",
			beforeSend: function(){
				message.innerHTML = "Finding some cool stuff for you...";
				anim.innerHTML = "<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>";
			},
			complete: function(){
				message.innerHTML = "Here it is!";
				anim.innerHTML = "";
			},	
			success: function(data){
				footer.innerHTML = data.attributionHTML;
				var string = "";
				string += "<div class='row'>";

				for(var i = 0; i<data.data.results.length; i++){
					var element = data.data.results[i];

					string += "<div class='col-md-3'>";
					string += "<a href ='" + element.urls[0].url+"'  target='_blank'>"
					string += "<img src= ' "+ element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+ "' />";
					string += "<h3>" + element.title + "</h3>";
					string += "</a>"
					string += "</div>";

					if ((i+1) % 4 == 0){
						string += "</div>";
						string += "<div class='row'>";

					}
				}

			comicsHtml.innerHTML = string;
			},
			error: function(){
				message.innerHTML = "We are sorry!";
			}
		});


		var series = "http://gateway.marvel.com/v1/public/series?ts=1&apikey=e77f931b6621498f34fa432058199053&hash=e3c34b543b2fa9c7c094aaf7ea2fc2a1";
		var comicSeries = document.getElementById("comicSeries");
		$.ajax({
			url: series,
			type: "GET",
			beforeSend: function(){
				message.innerHTML = "Finding some cool stuff for you...";
				anim.innerHTML = "<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>";
			},
			complete: function(){
				message.innerHTML = "Here it is!";
				anim.innerHTML = "";
			},
			success: function(data){
				footer.innerHTML = data.attributionHTML;
				var string = "";
				string += "<div class='row'>";

				for(var i = 0; i<data.data.results.length; i++){
					var element = data.data.results[i];

					string += "<div class='col-md-3'>";
					string += "<a href ='" + element.urls[0].url+"'  target='_blank'>"
					string += "<img src= ' "+ element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+ "' />";
					string += "<h3>" + element.title + "</h3>";
					string += "</a>"
					string += "</div>";

					if ((i+1) % 4 == 0){
						string += "</div>";
						string += "<div class='row'>";

					}
				}

				comicSeries.innerHTML = string;
			},
			error: function(){
				message.innerHTML = "We are sorry!";
			}
		});

		var events = "http://gateway.marvel.com/v1/public/events?ts=1&apikey=e77f931b6621498f34fa432058199053&hash=e3c34b543b2fa9c7c094aaf7ea2fc2a1";
		var comicEvents = document.getElementById("comicEvents");
		$.ajax({
			url: events,
			type: "GET",
			beforeSend: function(){
				message.innerHTML = "Finding some cool stuff for you...";
				anim.innerHTML = "<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>";
			},
			complete: function(){
				message.innerHTML = "Here it is!";
				anim.innerHTML = "";
			},
			success: function(data){
				footer.innerHTML = data.attributionHTML;
				var string = "";
				string += "<div class='row'>";

				for(var i = 0; i<data.data.results.length; i++){
					var element = data.data.results[i];

					string += "<div class='col-md-3'>";
					string += "<a href ='" + element.urls[0].url+"'  target='_blank'>"
					string += "<img src= ' "+ element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+ "' />";
					string += "<h3>" + element.title + "</h3>";
					string += "</a>"
					string += "</div>";

					if ((i+1) % 4 == 0){
						string += "</div>";
						string += "<div class='row'>";

					}
				}

			comicEvents.innerHTML = string;
			},
			error: function(){
				message.innerHTML = "We are sorry!";
			}
		});
		
		var creators = "http://gateway.marvel.com/v1/public/creators?ts=1&apikey=e77f931b6621498f34fa432058199053&hash=e3c34b543b2fa9c7c094aaf7ea2fc2a1";
		var creatorsHtml = document.getElementById("creatorsHtml");
		$.ajax({
			url: creators,
			type: "GET",
			beforeSend: function(){
				message.innerHTML = "Finding some cool stuff for you...";
				anim.innerHTML = "<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>";
			},
			complete: function(){
				message.innerHTML = "Here it is!";
				anim.innerHTML = "";
			},
			success: function(data){
				footer.innerHTML = data.attributionHTML;
				var string = "";
				string += "<div class='row'>";

				for(var i = 0; i<data.data.results.length; i++){
					var element = data.data.results[i];

					string += "<div class='col-md-3'>";
					string += "<a href ='" + element.urls[0].url+"'  target='_blank'>"
					string += "<img src= ' "+ element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+ "' />";
					string += "<h3>" + element.fullName + "</h3>";
					string += "</a>"
					string += "</div>";

					if ((i+1) % 4 == 0){
						string += "</div>";
						string += "<div class='row'>";

					}
				}

			creatorsHtml.innerHTML = string;
			},
			error: function(){
				message.innerHTML = "We are sorry!";
			}
		});

		var characters = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e77f931b6621498f34fa432058199053&hash=e3c34b543b2fa9c7c094aaf7ea2fc2a1";
		var charactersHtml = document.getElementById("characters");
		$.ajax({
			url: characters,
			type: "GET",
			beforeSend: function(){
				message.innerHTML = "Finding some cool stuff for you...";
				anim.innerHTML = "<i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>";
			},
			complete: function(){
				message.innerHTML = "Here it is!";
				anim.innerHTML = "";
			},
			success: function(data){
				footer.innerHTML = data.attributionHTML;
				var string = "";
				string += "<div class='row'>";

				for(var i = 0; i<data.data.results.length; i++){
					var element = data.data.results[i];

					string += "<div class='col-md-3'>";
					string += "<a href ='" + element.urls[0].url+"'  target='_blank'>"
					string += "<img src= ' "+ element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+ "' />";
					string += "<h3>" + element.name + "</h3>";
					string += "</a>"
					string += "</div>";

					if ((i+1) % 4 == 0){
						string += "</div>";
						string += "<div class='row'>";

					}
				}

			charactersHtml.innerHTML = string;
			},
			error: function(){
				message.innerHTML = "We are sorry!";
			}
		});

	}
};
marvel.render();
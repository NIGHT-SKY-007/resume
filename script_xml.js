$(document).ready(function(){
	//load xml data using ajax
	// ajax stands for - Asynchronous JavaScript and XML

	$.ajax({

		type: "GET",
		url: "xml_movies.xml",  //path to the xml file
		dataType: "xml",
		success: function(xml){
			//code for successfully loading of the file goes here

			let movies=[];

			$(xml).find('movie').each(function(){
				const title=$(this).find('title').text();
				const year=parseInt($(this).find('year').text());
				const director=$(this).find('director').text();
				const genre=$(this).find('genre').text();
				const rating=$(this).find('rating').text();
				const image=$(this).find('image').text();

				movies.push( {title, year, director, genre, rating,image }); // pushing to the array

				

				$('#movie-list').append(`<li class="movie-item">
					<img src="${image}">
					<h1>${title}</h1>
					<p>Year: ${year}</p>
					<p>Director: ${director}</p>
					<p>Rating: ${rating}</p>
					<p>Genre: ${genre}</p>
					</li>`);
			});

			updateMovieList(movies);

			$('#sort_year').click(function(){
				movies.sort((a,b) => a.year - b.year);
				updateMovieList(movies);
			})

			$('#sort_rating').click(function(){
				movies.sort((a,b) => a.rating - b.rating);
				updateMovieList(movies);
			})

			$('#search_bar').keyup(function(){
				const searched_val=$(this).val().toLowerCase();
				const movie_val = movies.filter(movie => movie.title.toLowerCase().includes(searched_val));
				updateMovieList(movie_val);
			})

			function updateMovieList(movies){
				$('#movie-list').empty();
				movies.forEach(movie =>{
					$('#movie-list').append(`<li class="movie-item">
						<img src="${movie.image}">
					<h1>${movie.title}</h1>
					<p>Year: ${movie.year}</p>
					<p>Director: ${movie.director}</p>
					<p>Rating: ${movie.rating}</p>
					<p>Genre: ${movie.genre}</p>
					</li>`)
				});
			}

					
		},
		error: function(){
			$('#movie-list').append(`<li>Error loading movie data.</li>`);
		}
	})   // end of ajax
})  // end of document
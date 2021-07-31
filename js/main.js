$(document).ready(() => {
  $("#searchForm").on('submit', (e) => {
    e.preventDefault();
    let searchTxt = $("#searchText").val();
    let check_char= searchTxt.substring(0, 2);
    if(check_char =='tt'){
      searchText= 'i='+searchTxt
    }
    else{
      searchText= 's='+searchTxt
    }
    getMovies(searchText);

  });
});

function getMovies(searchText) {
  //make request to api using axios
  // Make a request for a user with a given ID
  let check_search= searchText.substring(0, 1);
  if (check_search =='i' ){
    axios.get('http://www.omdbapi.com/?apikey=6e59647c&'+searchText)
    .then(function (response) {
      let movies = response.data;
      var Ratings= movies.Ratings[0].Value;
      let output = '';
      $.each(movies, (index, movie) => {
        output = `
            <div class="col-md-3 col-sm-6 ">
            <img src="${movies.Poster}">
              <div class="well text-center ">
              <ul class="list-group table">
              <li class="list-group-item"><strong><b>Title:</b></strong>${movies.Title}</li>
              <li class="list-group-item"><strong><b>Plot:</b></strong> ${movies.Plot}</li>
              <li class="list-group-item"><strong><b>imdbID:</b></strong> ${movies.imdbID}</li>
              <li class="list-group-item"><strong><b>Ratings:</b></strong> ${movies.Ratings[0].Value}</li>
              <li class="list-group-item"><strong><b>Released:</b></strong> ${movies.Released} </li> 
            </ul>
                <button onclick="movieSelected_t('${movies.Poster}','${movies.Title}','${movies.Plot}','${movies.imdbID}','${movies.Ratings[0].Value}','${movies.Released}')" class="btn btn-primary">Save</button>
              </div>
            
            </div>
          `;
      });
      $('#movies').html(output);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  else
  axios.get('http://www.omdbapi.com/?apikey=6e59647c&'+searchText)
    .then(function (response) {
      let movies = response.data.Search;
      let output='' ;
      $.each(movies,function(index,movie){
          var checkImage = function(movie){
                 
          }
        output+=`
          <div class="col-lg-3">
            <div class="well text-center">
               <img src="${movie.Poster}" class="img-thumbnail" />
               <ul class="list-group table">
               <li class="list-group-item"><strong><b>Title:</b></strong>${movie.Title}</li>
               <li class="list-group-item"><strong><b>Year:</b></strong> ${movie.Year}</li>
               <li class="list-group-item"><strong><b>imdbID:</b></strong> ${movie.imdbID}</li>

             </ul>
             <button onclick="movieSelected('${movie.Poster}','${movie.Title}', '${movie.Year}','${movie.imdbID}')" class="btn  btn-success"> Save</a>
            </div>
          </div>
      
          `;    
      });
      $('#movies').html(output);
    

    })
    .catch(function (error) {
    console.log(error);
    });
}
function movieSelected_t(Poster,Title,Plot,imdbID,Ratings,Released){

 //console.log(Poster,Title,Plot,imdbID,Ratings,Released);
 const toAbbr = (str) => {
  return str.match(/(?<=(\s|^))[a-z]/gi)
            .join('')
            .toLowerCase();
};

movieCode = toAbbr(Title); 

 var settings = {
  "url": "http://3.91.159.200/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "data": {
    "MovieCode": movieCode,
    "image": Poster,
    "title": Title,
    "plot": Plot,
    "IMDB": imdbID,
    "rating": Ratings,
    "release_date": Released
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
  // alert(response.Code)
  // alert(response.Status)
  alert(response.Message)
});

 }

function movieSelected(Poster,Title,Year,imdbID){

//console.log(Poster,Title,Year,imdbID);

const toAbbr = (str) => {
  return str.match(/(?<=(\s|^))[a-z]/gi)
            .join('')
            .toLowerCase();
};

movieCode = toAbbr(Title); 

var settings = {
  "url": "http://3.91.159.200/",
  "method": "POST",
  "timeout": 0,
  "crossDomain" : true,
  "Access-Control-Allow-Origin": "*",
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "data": {
    "MovieCode": movieCode,
    "image": Poster,
    "title": Title,
    "plot": "PLOT-NULL",
    "IMDB": imdbID,
    "rating": "RATING-NULL",
    "release_date": Year
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
  // alert(response.Code)
  // alert(response.Status)
  alert(response.Message)
});

}


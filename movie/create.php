<?php
$requestMethod = $_SERVER["REQUEST_METHOD"];
include('../class/Movie.php');
$movie= new Movie();
switch($requestMethod) {
	case 'POST':
		$movieCode = hash('sha256', $_POST['MovieCode']);
		$image = $_POST['image'];
		$title = $_POST['title'];
		$plot = $_POST['plot'];
		$IMDB = $_POST['IMDB'];
		$rating = $_POST['rating'];
		$release_date= $_POST['release_date'];

	    $movie->setMovieCode($movieCode);
	    $movie->setImage($image);
	    $movie->setTitle($title);
	    $movie->setPlot($plot);
	    $movie->setIMDB($IMDB);
	    $movie->setRating($rating);
		$movie->setRelease_date($release_date);
		
		$movieInfo = $movie->createMovie();

		if(!empty($movieInfo)) {
			$js_encode = json_encode(array('Code'=>'200','Status'=>FALSE, 'message'=>'Movie saving failed.'), true);
	    
        } else {
			$js_encode = json_encode(array('Code'=>'200','Status'=>TRUE, 'Message'=>'Movie Saved Successfully'), true);
        }
		header('Content-Type: application/json');
		echo $js_encode;	
		break;
	default:
	header("HTTP/1.0 405 Method Not Allowed");
	break;
}
?>
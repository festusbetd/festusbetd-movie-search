<?php
/**
 * @packIMDB Movieplot
 *
 * @author TechArise Team
 *
 * @email  info@techarise.com
 *   
 */

include("DBConnection.php");
class Movie
{
    protected $db;
    private $_MovieCode;
    private $_image;
    private $_title;
    private $_plot;
  
    private $_IMDB;
	private $_rating;
	// private $release_date;

    public function setMovieCode($MovieCode) {
        $this->_MovieCode = $MovieCode;
    }
    public function setImage($image) {
        $this->_image = $image;
    }
    public function setTitle($title) {
        $this->_title= $title;
    }
    public function setPlot($plot) {
        $this->_plot = $plot;
    }
    public function setIMDB($IMDB) {
        $this->_IMDB = $IMDB;
    }
    public function setRating($rating) {
        $this->_rating = $rating;
    }
	public function setRelease_date($release_date) {
        $this->_release_date = $release_date;
    }

    public function __construct() {
        $this->db = new DBConnection();
        $this->db = $this->db->returnConnection();
    }
	

    // create Student
    public function createMovie() {
		try {
    		$sql = 'INSERT INTO tbl_dimension_data (MovieCode, image, title, plot, IMDB, rating, release_date)  VALUES (:MovieCode, :image, :title, :plot, :IMDB, :rating, :release_date)';
    		$data = [
			    'MovieCode' => $this->_MovieCode,
			    'image' => $this->_image,
			    'title' => $this->_title,
			    'plot' => $this->_plot,
			    'IMDB' => $this->_IMDB,
			    'rating' => $this->_rating,
				'release_date' => $this->_release_date,
			];
	    	$stmt = $this->db->prepare($sql);
	    	$stmt->execute($data);

		} catch (Exception $e) {
    		die("Oh noes! There's an error in the query!");
		}

    }

 
   
    // getAll Student
    public function getAllStudent() {
    	try {
    		$sql = "SELECT * FROM tbl_dimension_data";
		    $stmt = $this->db->prepare($sql);

		    $stmt->execute();
		    $result = $stmt->fetchAll(\PDO::FETCH_ASSOC);
            return $result;
		} catch (Exception $e) {
		    die("Oh noes! There's an error in the query!");
		}
    }



}
?>
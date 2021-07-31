# MOVIE-SEARCH
A web app build with Bootstrap JavaScript (JQuery) using axios client for making requests and Omdbapi API to fetch Movie data.
# How to run
+ clone the repository: ```https://github.com/festusbetd/movie-search.git```
+ run ```index.html``` on any server.

### Website
+ Front-end: ```http://34.227.192.15/```
### API
+ save Movie: ```http://3.91.159.200/```
+ Parameters: ```MovieCode,title,plot,IMDB,rating,release_date,image/```

### Database 
+ DDL statements: 
```CREATE TABLE `tbl_dimension_data` (```
 ``` `id`int AUTO_INCREMENT PRIMARY KEY,```
 ``` `MovieCode` varchar(255) DEFAULT NULL,```
 ``` `title` varchar(255) DEFAULT NULL,```
 ``` `plot` varchar(255) DEFAULT NULL,```
 ``` `IMDB` varchar(255) DEFAULT NULL,```
 ``` `rating` varchar(255) DEFAULT NULL,```
  ````release_date` varchar(255) DEFAULT NULL,```
 ``` `image` varchar(255) DEFAULT NULL```
```) ENGINE=InnoDB DEFAULT CHARSET=latin1;```

### Screenshots
+ DDL statements: MainPage
![alt tag](https://github.com/festusbetd/movie-search/blob/main/MainPage.jpg)
+ DDL statements: Results& Saving
![alt tag](https://github.com/festusbetd/movie-search/blob/main/Searching%26Saving.jpg)


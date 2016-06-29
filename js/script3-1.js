//
// COMM644:Assignment 3 - Part 1
//

/*
// STEP 1
var favMovies = ['Dirty Dancing', 'The Matrix', 'The Avengers', 'Casablanca', 'Point Break']; 	
 console.log(favMovies[1]);
*/

/*
// STEP 2
var movies = [];
    movies[0]='Dirty Dancing';
    movies[1]='The Matrix';
    movies[2]='The Avengers';
    movies[3]='Casablanca';
    movies[4]='Point Break';
console.log(movies[0]);
*/

/*
//
// STEP 3
//
var movies = ['Dirty Dancing', 'The Matrix', 'The Avengers', 'Casablanca', 'Point Break'];
    movies.splice(2,0, 'Sound of Music');
console.log(movies.length);
*/


/*
//
// STEP 4
var movies = [];
    movies[0]='Dirty Dancing';
    movies[1]='The Matrix';
    movies[2]='The Avengers';
    movies[3]='Casablanca';
    movies[4]='Point Break';
    //or movies.shift();
    delete movies[0];
    console.log(movies);
*/

/*
// STEP 5
var movies = [];
    movies[0]='Dirty Dancing'; 
    movies[1]='The Matrix';
    movies[2]='The Avengers';
    movies[3]='Casablanca';
    movies[4]='Hunger Games';
    movies[5]='Point Break';
    movies[6]='Star Wars';
    for(i=0; i < 7; i++) {
    console.log(movies[i]);
     }
*/

/*
 // STEP 6
var movies = ['Dirty Dancing','The Matrix','The Avengers','Casablanca', 'Hunger Games', 'Point Break', 'Star Wars'];
    for (var x in movies) {
        console.log(movies[x]);
    }
//
*/

/*
// STEP 7
var movies = ['Dirty Dancing','The Matrix','The Avengers','Casablanca', 'Hunger Games', 'Point Break', 'Talladega Nights'];
    for (var x in movies.sort()) {
    console.log(movies[x]);
    }
*/

/*
// STEP 8
var movies = ['Dirty Dancing','The Matrix','The Avengers','Casablanca', 'Hunger Games', 'Point Break', 'Talladega Nights'];
var leastFavMovies = ['Pulp Fiction','Rocky IV', 'Bring It On'];

console.log('Movies I like:' + "\n"+"\n") 
for (i=0; i < movies.length; i++) {
    console.log(movies[i] +"\n" );
}
console.log('\n' + '\n' + 'Movies I regret watching:' + '\n' + '\n');
for  (j=0; j < leastFavMovies.length; j++) {
    console.log(leastFavMovies[j] +"\n");
}
*/

/*
// STEP 9
var movies = ['Dirty Dancing','The Matrix','The Avengers','Casablanca', 'Hunger Games', 'Point Break', 'Talladega Nights'];
var leastFavMovies = ['Pulp Fiction','Rocky IV', 'Bring It On'];
    movies = movies.concat(leastFavMovies);
    movies = (movies.sort());
    console.log(movies.reverse());
*/

/*
// STEP 10
var movies = ['Dirty Dancing','The Matrix','The Avengers','Casablanca', 'Hunger Games', 'Point Break', 'Talladega Nights'];
var leastFavMovies = ['Pulp Fiction','Rocky IV', 'Bring It On'];
    movies = movies.concat(leastFavMovies);
    movies = (movies.sort());
    movies = (movies.reverse());
    console.log(movies.pop());
*/

/*
// STEP 11
var movies = ['Dirty Dancing','The Matrix','The Avengers','Casablanca', 'Hunger Games', 'Point Break', 'Talladega Nights'];
var leastFavMovies = ['Pulp Fiction','Rocky IV', 'Bring It On'];
    movies = movies.concat(leastFavMovies);
    movies = (movies.sort());
    movies = (movies.reverse());
    console.log(movies.shift());
*/

/*
// STEP 12
var movies = ['Dirty Dancing','The Matrix','The Avengers','Casablanca', 'Hunger Games', 'Point Break', 'Talladega Nights'];
var leastFavMovies = ['Pulp Fiction','Rocky IV', 'Bring It On'];
    movies = movies.concat(leastFavMovies);
    movies = (movies.sort());
    movies = (movies.reverse());
var moviesNoLike = movies.indexOf('Rocky IV') + '\n' + movies.indexOf('Pulp Fiction') + '\n' + movies.indexOf('Bring It On') ;
    console.log(moviesNoLike);
var allGoodMovies = movies.splice(3,2,'Edward Scissorhands', 'Monty Python') + '\n' + movies.splice(9,1,'Young Frankenstein');
    console.log(movies);
*/

/*
// STEP 13
var employee1 = [];
    employee1['employee id'] = '1';
    employee1['name'] = 'Betty Jones';        
    employee1['title'] = 'Sr. Consultant';
    employee1['department'] = 'Software Development'; 
    employee1['currently employed'] = 'yes';

var employee2 = [];
    employee2['employee id'] = '2';
    employee2['name'] = 'Dave Bradley';        
    employee2['title'] = 'Programmer';
    employee2['department'] = 'Development'; 
    employee2['currently employed'] = 'yes';

var employees = [employee1,employee2];
    console.log(employees[1]['name']);
*/

/*
//// STEP 14
var employee1 = [];
    employee1['employee id'] = '1';
    employee1['name'] = 'Betty Jones';        
    employee1['title'] = 'Sr. Consultant';
    employee1['department'] = 'Software Development'; 
    employee1['currently employed'] = 'yes';

var employee2 = [];
    employee2['employee id'] = '2';
    employee2['name'] = 'Dave Bradley';        
    employee2['title'] = 'Programmer';
    employee2['department'] = 'Development'; 
    employee2['currently employed'] = 'yes';

var employees = [employee1,employee2];
for (var i=0; i<employees.length; i++){
    console.log(employees[i]["name"]);              
 }
*/

/*
// STEP 15
var employee1 = [];
    employee1['employee id'] = '1';
    employee1['name'] = 'Betty Jones';        
    employee1['title'] = 'Sr. Consultant';
    employee1['department'] = 'Software Development'; 
    employee1['currently employed'] = 'yes';

var employee2 = [];
    employee2['employee id'] = '2';
    employee2['name'] = 'Dave Bradley';        
    employee2['title'] = 'Programmer';
    employee2['department'] = 'Development'; 
    employee2['currently employed'] = 'yes';

var employee3 = [];
    employee3['employee id'] = '3';
    employee3['name'] = 'Chris Porter';        
    employee3['title'] = 'IT Manager';
    employee3['department'] = 'IT'; 
    employee3['currently employed'] = 'no';

var employees = [employee1,employee2,employee3];

console.log('Currently employed with the company: ' +'\n' + '\n');
for (var i=0; i<employees.length; i++){
    if(employees[i]['currently employed'] == 'yes') {
    console.log(employees[i]['name'] + '\n'); 
        }
    else if
    (employees[i]['currently employed'] == 'no') {
        console.log('\n' + 'Not currently employed with the company: ' +'\n' + '\n');
        console.log(employees[i]['name'] + '\n');
    }
 }
*/ 
 
/*
//
// STEP 16
//
var movies = [['Dirty Dancing', 1],['The Matrix', 2],['Monty Python', 3],['Point Break', 4],['Rocky Horror Picture Show', 5]];
var i, j;
for (i in movies) {
    for (j in movies[i]) {
var myTitles = movies[i].filter(function(item) {    
    return typeof item === "string";
    });
  console.log(myTitles[0]);  
    }
}
*/

//
// PRACTICE WITH FUNCTIONS
/*   
// STEP 1
//Anonymous function displayMessage()
var displayMessage = function(param) {
    console.log(param); 
}
displayMessage('This is a message just for you'); 
*/

/*
//
// STEP 2
// Named function calculate
function calculate(x,y) {
  var remainder = (x % y);
        window.console.log('The remainder is: ' + remainder);       
    } 
calculate(25, 12);
*/
 
/*
// STEP 3
var employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
console.log('Employees:' + '\n' + '\n');
for(var i = 0; i <employees.length; i++) {
    var showEmployee = function(employees){
    }
    console.log(employees[i] +'\n' );
}
*/

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const getDirector = moviesArray.map((element) => {
    return element.director;
  })
    return getDirector;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;

  const checkForSpielberg = moviesArray.map(function (el) {
    if (el.director === "Steven Spielberg" && el.genre.includes('Drama')) {
      count++;
    } else {
      return 0;
    }

    if (moviesArray.length === 0) {
      return 0;
    } else if (count > 0) {
      return count;
    } else {
      return 0;
    }
    return checkForSpielberg;
  });
  return count;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray.length === 0){
    return 0;
  }

  const getScore = moviesArray.map((element) => {
    return element.score;
  })
  
  const getSumOfScores = getScore.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })

  const getAvg = getSumOfScores/moviesArray.length;
  return Number(getAvg.toFixed(2)); 
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const getDramaMovies = moviesArray.filter((dramas) => {
    return dramas.genre.includes("Drama")
  })
  return scoresAverage(getDramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//I don't understand this one, need to review again! 
function orderByYear(moviesArray) {
  let newArray = [...moviesArray];
  const getYear = moviesArray.sort((a, b) => {
     if(a.year > b.year){
      return 1;
     } else if (b.year > a.year){
      return -1;
     } else{
      if(a.title > b.title){
        return 1;
      } else if (b.title > a.title){
        return -1;
      }
      return 0
     }
});
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//I don't understand this one, need to review again! 
function orderAlphabetically(moviesArray) {
  return [...moviesArray].sort((a,b) => {
    if(a.title > b.title){
      return 1;
    } else if (a.title < b.title){
      return -1;
    } else {
      return 0;
    }
  })
    .map((eachMovie) => eachMovie.title)
    .slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

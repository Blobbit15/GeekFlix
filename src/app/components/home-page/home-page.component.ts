import { Component, OnInit } from '@angular/core';
import { IntMovie } from 'src/app/IntMovie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  movies: IntMovie[] = [];
  filteredArray: IntMovie[] = [];
  deletedArray: IntMovie[] = [];
  checkedHappy = false;
  checkedSad = false;
  checkedNeutral = false;
  checkedClear = false;

  constructor(private movie: MovieService) { }

  ngOnInit(): void {
    this.movie.getMovies().subscribe(movie => {
      this.movies = movie
      console.log(this.movies);

      for (let i = 0; i < this.movies.length; i++) {
        if (localStorage.getItem("Deleted" + this.movies[i]["id"]) !== null) {
          this.deletedArray.push(this.movies[i])
          this.movies.splice(i, 1);
          i--;
        }
      }
    })
  }

  onRestoreMovies(): void {
    for (let i = 0; i < this.deletedArray.length; i++) {
      localStorage.removeItem("Deleted" + this.deletedArray[i]["id"])
    }
    location.reload();
  }

  onHappy(): IntMovie[] {
    if (this.checkedHappy) {
      for (let i = 0; i < this.movies.length; i++) {
        if (localStorage.getItem(JSON.stringify(this.movies[i]["id"])) == "Happy") {
          this.filteredArray.push(this.movies[i])
        }
      }
      console.log(this.filteredArray)
    }
    else {
      for (let i = 0; i < this.filteredArray.length; i++) {
        if (localStorage.getItem(JSON.stringify(this.filteredArray[i]["id"])) == "Happy") {
          this.filteredArray.splice(i, 1);
          i--;
        }
      }
    }
    return this.filteredArray;
  }

  onSad(): IntMovie[] {
    if (this.checkedSad) {
      for (let i = 0; i < this.movies.length; i++) {
        if (localStorage.getItem(JSON.stringify(this.movies[i]["id"])) == "Sad") {
          this.filteredArray.push(this.movies[i])
        }
      }
      console.log(this.filteredArray)
    }
    else {
      for (let i = 0; i < this.filteredArray.length; i++) {
        if (localStorage.getItem(JSON.stringify(this.filteredArray[i]["id"])) == "Sad") {
          this.filteredArray.splice(i, 1);
          i--;
        }
      }
    }
    return this.filteredArray;
  }

  onNeutral(): IntMovie[] {
    if (this.checkedNeutral) {
      for (let i = 0; i < this.movies.length; i++) {
        if (localStorage.getItem(JSON.stringify(this.movies[i]["id"])) == "Neutral") {
          this.filteredArray.push(this.movies[i])
        }
      }
      console.log(this.filteredArray)
    }
    else {
      for (let i = 0; i < this.filteredArray.length; i++) {
        if (localStorage.getItem(JSON.stringify(this.filteredArray[i]["id"])) == "Neutral") {
          this.filteredArray.splice(i, 1);
          i--;
        }
      }
    }
    return this.filteredArray;
  }

  onClear(): IntMovie[] {
    if (this.checkedClear) {
      for (let i = 0; i < this.movies.length; i++) {
        if (localStorage.getItem(JSON.stringify(this.movies[i]["id"])) === null) {
          this.filteredArray.push(this.movies[i])
        }
      }
      console.log(this.filteredArray)
    }
    else {
      for (let i = 0; i < this.filteredArray.length; i++) {
        if (localStorage.getItem(JSON.stringify(this.filteredArray[i]["id"])) === null) {
          this.filteredArray.splice(i, 1);
          i--;
        }
      }
    }
    return this.filteredArray;
  }
}

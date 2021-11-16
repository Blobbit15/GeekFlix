import { Component, OnInit } from '@angular/core';
import { IntMovie } from 'src/app/IntMovie';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  similarMovies: IntMovie[] = [];
  moviesArray: IntMovie[] = [];

  constructor(private movie: MovieService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      console.log(params)
      let filmid = Number(params.get('id'));

      this.movie.getMovies().subscribe(movie => {
        this.moviesArray = movie
        console.log(this.moviesArray);

        for (let i = 0; i < this.moviesArray.length; i++) {
          if (filmid === this.moviesArray[i]["id"]) {
            console.log(this.moviesArray[i]["title"]);
            this.moviesArray = this.moviesArray.filter((item: any) => item.id === filmid)
          }
        }
      })
      this.movie.getSimilarMovies(filmid).subscribe(movie => {
        this.similarMovies = movie
        console.log(this.similarMovies);
      })
    });
  }
}

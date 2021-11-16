import { Component, Input, OnInit } from '@angular/core';
import { IntMovie } from 'src/app/IntMovie';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.css']
})
export class SimilarMoviesComponent implements OnInit {
  @Input() film!: IntMovie;

  constructor() { }

  ngOnInit(): void {
  }

}

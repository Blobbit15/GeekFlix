import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.css']
})
export class SimilarMoviesComponent implements OnInit {
  @Input() film!: any;

  constructor() { }

  ngOnInit(): void {
  }

}

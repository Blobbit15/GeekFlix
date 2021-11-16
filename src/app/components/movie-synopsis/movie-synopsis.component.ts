import { Component, Input, OnInit } from '@angular/core';
import { IntMovie } from 'src/app/IntMovie';

@Component({
  selector: 'app-movie-synopsis',
  templateUrl: './movie-synopsis.component.html',
  styleUrls: ['./movie-synopsis.component.css']
})
export class MovieSynopsisComponent implements OnInit {
  @Input() item!: any;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteMovie(): void {
    localStorage.setItem("Deleted"+[this.item.id], this.item.id)
    location.reload();
  }

}

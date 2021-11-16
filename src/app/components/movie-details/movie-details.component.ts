import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() item!: any;


  constructor() { }

  ngOnInit(): void {
  }

  onHappyClick(): void {
    localStorage.setItem(this.item.id, "Happy")
  }
  onSadClick(): void {
    localStorage.setItem(this.item.id, "Sad")
  }
  onNeutralClick(): void {
    localStorage.setItem(this.item.id, "Neutral")
  }
  onClearEmotion(): void {
    localStorage.removeItem(JSON.stringify(this.item.id))
  }

}

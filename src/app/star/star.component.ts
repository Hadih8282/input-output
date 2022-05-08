import { Component,Input,OnInit,EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  
  @Input() rating: number = 4;
  @Output() starClicked = new EventEmitter<number>();
  width: number = 90;


  constructor() { }

  ngOnInit(): void {
    this.width =this.rating * 90 / 5;
  }
  public onClick() {
    this.starClicked.emit(this.rating);
  }

}

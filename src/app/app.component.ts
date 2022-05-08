import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output';
  ratings: number[] = [3.4, 4, 3, 2.5, 4.5];

  public onStarClicked(rating: number) {
    console.log(`The rating ${rating} is clicked!`);
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imageUrl = "https://dotnetnow.net/images/movies/movie-1.jpeg";

  title = 'UMAY LODICAKES';

  date = new Date();

  price = 100;
}

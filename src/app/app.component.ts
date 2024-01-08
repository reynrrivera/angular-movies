import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imageUrl = "assets/5lc1pb.jpg";

  widthUrl = 400;

  title = 'UMAY LODICAKES';

  attributeValue = "movie-app-test-value";

  colors = 'styleBgColor styleTextColor';

  styles = 'background-color: blue; color: white;';

  backgroundColor = 'blue';

  fullName = "";

  timeNow = new Date();

  setTimeToNow(){
    this.timeNow = new Date();
  }

  color = '';
  setTextColor(_color: string){
    console.log(_color);
    this.color = _color;
  }

  date = new Date();

  price = 100;
}

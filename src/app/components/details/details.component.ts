import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {

  details = "details work!";

  constructor() { }

  ngOnChanges(){
    console.log('changes called');
  }

  ngOnInit(): void {
    console.log('oninit called');
  }

  ngAfterContentInit(){
    console.log('aftercontent called');
  }

  ngAfterViewInit(){
    console.log('afterview called');
  }

}

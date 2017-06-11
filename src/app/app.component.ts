import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  // Zoom level
  zoom: number = 10;
  // Start Position
    lat: number = 30.2672;
    lng: number = 97.7431;
  // Markers
  markers: marker[] = [
    {
      name:'Company One',
      lat: 30.2672,
      lng: 97.7431,
      draggable: true
    },
     {
      name:'Company One',
      lat: 35.2672,
      lng: 97.7431,
      draggable: true
    },
     {
      name:'Company One',
      lat: 39.2672,
      lng: 97.7431,
      draggable: true
    }
  ];

  constructor(){

  }
  
}

// Marker Type
  interface marker{
    name?:string;
    lat: number;
    lng: number;
    draggable:boolean;
  }
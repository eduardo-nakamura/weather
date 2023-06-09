import { Component, OnInit } from '@angular/core';
import {WeatherService} from './services/weather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather';
  constructor(private weatherService: WeatherService){}
  
  ngOnInit(): void {
    this.weatherService.getWeatherData('london')
    .subscribe({
      next: (response: any) => {
        console.log(response)
      }
    })
  }

 
}

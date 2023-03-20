import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { environment } from '../../environments/environment'
import { WeatherData } from '../models/weather.model'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string) {
    // https://open-weather-map27.p.rapidapi.com/weather
    // https://open-weather-map27.p.rapidapi.com/weather
    return this.http.get<any>(environment.weatherApiBaseUrl)
  }
}

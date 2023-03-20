export interface WeatherData {
    current_weather: CurrentWeather
    daily: Daily
}

export interface CurrentWeather {
    temperature: number
    windspeed: number
}

export interface Daily {
    temperature_2m_max: any
    temperature_2m_min: any
}